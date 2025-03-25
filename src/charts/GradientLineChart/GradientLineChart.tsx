import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface GradientLineChartProps {
    width?: number | string;
    height?: number | string;
    dataPoints: { label: string; value: number }[];
}

const GradientLineChart: React.FC<GradientLineChartProps> = ({
    width = 600,
    height = 300,
    dataPoints,
}) => {
    const chartRef = useRef<any>(null);

    useEffect(() => {
        if (chartRef.current) {
            const chart = chartRef.current;
            const ctx = chart.ctx;

            if (!chart.data.datasets.length) return;

            // Create gradient for the line
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, "#F05CD5"); // Top color
            gradient.addColorStop(1, "#00CE8E"); // Bottom color

            chart.data.datasets[0].borderColor = gradient;
            chart.data.datasets[0].borderWidth = 2.05;

            // Custom plugin to apply shadow ONLY to the line
            ChartJS.register({
                id: "shadowEffect",
                beforeDatasetsDraw: (chartInstance) => {
                    const { ctx } = chartInstance;
                    const meta: any = chartInstance.getDatasetMeta(0);

                    if (!meta || !meta.dataset) return;

                    ctx.save();

                    // Apply shadow before drawing the line
                    ctx.shadowColor = "rgba(240, 92, 213, 0.5)"; // Shadow color
                    ctx.shadowBlur = 15;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 8;

                    // Draw the line dataset with shadow
                    meta.dataset.draw(ctx);

                    // Reset shadow to prevent affecting labels
                    ctx.shadowColor = "transparent";
                    ctx.shadowBlur = 0;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;

                    ctx.restore();
                },
            });

            chart.update();
        }
    }, [height]);

    const data = {
        labels: dataPoints.map((item) => item.label),
        datasets: [
            {
                label: "Performance",
                data: dataPoints.map((item) => item.value),
                fill: false,
                pointRadius: 0, // Hide points
                borderColor: "#F05CD5", // Will be overridden by gradient
                tension: 0.4, // Smooth curve
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: {
                grid: { display: false },
            },
            y: {
                grid: { color: "rgba(255, 255, 255, 0.1)" }, // Subtle background grid lines
            },
        },
    };

    return (
        <div style={{ width, height }}>
            <Line ref={chartRef} data={data} options={options} />
        </div>
    );
};

export default GradientLineChart;
