import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import DynamicForm from '../../components/DynamicForm/DynamicForm';
import Toast from '../../components/Toast/Toast';
import { themeColors } from '../../config';

const SalesPage = () => {
    const { user } = useAuth();
    const [toastState, setToastState] = useState({
        isOpen: false,
        title: '',
        message: '',
        color: themeColors.success
    });

    const showToast = (title: string, message: string, color: string) => {
        setToastState({
            isOpen: true,
            title,
            message,
            color
        });
    };

    const handleCloseToast = () => {
        setToastState({ ...toastState, isOpen: false });
    };

    const formFields = [
        {
            type: 'autocomplete',
            name: 'country',
            label: 'Country',
            placeholder: 'Select country',
            size: 6,
            options: [
                { value: 'US', label: 'United States' },
                { value: 'CA', label: 'Canada' },
                { value: 'MX', label: 'Mexico' },
                { value: 'GB', label: 'United Kingdom' },
                { value: 'DE', label: 'Germany' },
                { value: 'FR', label: 'France' },
                { value: 'ES', label: 'Spain' },
                { value: 'IT', label: 'Italy' },
                { value: 'JP', label: 'Japan' },
                { value: 'AU', label: 'Australia' },
                { value: 'BR', label: 'Brazil' },
                { value: 'IN', label: 'India' },
                { value: 'CN', label: 'China' },
                { value: 'RU', label: 'Russia' },
                { value: 'ZA', label: 'South Africa' }
            ]
        },
        {
            type: 'date',
            name: 'event_date',
            label: 'Event Date',
            size: 6
        },
        {
            type: 'text',
            name: 'order_id',
            label: 'Order ID',
            placeholder: 'Enter order ID',
            size: 6
        },
        {
            type: 'text',
            name: 'website',
            label: 'Website',
            placeholder: 'Enter website',
            size: 6
        },
        {
            type: 'text',
            name: 'publisher_name',
            label: 'Publisher Name',
            placeholder: 'Enter publisher name',
            size: 6
        },
        {
            type: 'number',
            name: 'sale_amount',
            label: 'Sale Amount',
            placeholder: 'Enter sale amount',
            size: 6,
            decimalPlaces: 2
        },
        {
            type: 'number',
            name: 'commission_amount',
            label: 'Commission Amount',
            placeholder: 'Enter commission amount',
            size: 6,
            decimalPlaces: 2
        }
    ];

    const handleSubmit = async (formData: any) => {
        try {
            const response = await fetch('/api/sales', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    user_id: user?.id,
                    publisher_id: user?.publisher_id
                })
            });

            if (!response.ok) {
                throw new Error('Failed to submit sale');
            }

            showToast('Success', 'Sale information submitted successfully', themeColors.success);
        } catch (error) {
            showToast('Error', 'Failed to submit sale information', themeColors.danger);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Add Sale Information</h1>
            <DynamicForm
                title="Sale Information"
                fields={formFields}
                onSubmit={handleSubmit}
                submitEndpoint="/api/sales"
                sendButtonTitle="Submit Sale"
                mode="create"
            />
            <Toast
                isOpen={toastState.isOpen}
                title={toastState.title}
                message={toastState.message}
                color={toastState.color}
                onClose={handleCloseToast}
            />
        </div>
    );
};

export default SalesPage; 