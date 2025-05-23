type AdvertiserCommission = {
    pubCommissionAmountUsd: string;
    postingDate: string;
};

export const calculateCurrentCommissionRate = (commissions: AdvertiserCommission[]): number => {
    const totalCommission = commissions.reduce((sum, record) => {
        const amount = parseFloat(record.pubCommissionAmountUsd);
        return sum + (amount > 0 ? amount : 0);
    }, 0);

    const totalRecords = commissions.length;
    return totalRecords > 0 ? totalCommission / totalRecords : 0;
};

export const calculatePendingCommissions = (commissions: AdvertiserCommission[]): number => {
    const pendingCommission = commissions.reduce((sum, record) => {
        const amount = parseFloat(record.pubCommissionAmountUsd);
        return sum + (amount < 0 ? Math.abs(amount) : 0);
    }, 0);
    return pendingCommission;
};

export const calculatePaidThisMonth = (commissions: AdvertiserCommission[]): number => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const paidThisMonth = commissions.reduce((sum, record) => {
        const postingDate = new Date(record.postingDate);
        const amount = parseFloat(record.pubCommissionAmountUsd);

        if (
            postingDate.getMonth() === currentMonth &&
            postingDate.getFullYear() === currentYear &&
            amount > 0
        ) {
            return sum + amount;
        }
        return sum;
    }, 0);

    return paidThisMonth;
};

export const calculateTotalPaid = (commissions: AdvertiserCommission[]): number => {
    const totalPaid = commissions.reduce((sum, record) => {
        const amount = parseFloat(record.pubCommissionAmountUsd);
        return sum + (amount > 0 ? amount : 0);
    }, 0);
    return totalPaid;
};

// Example usage:
/*const advertiserCommissions = commissionsData.data.advertiserCommissions.records;

const currentCommissionRate = calculateCurrentCommissionRate(advertiserCommissions);
const pendingCommissions = calculatePendingCommissions(advertiserCommissions);
const paidThisMonth = calculatePaidThisMonth(advertiserCommissions);
const totalPaid = calculateTotalPaid(advertiserCommissions);

console.log("Current Commission Rate:", currentCommissionRate);
console.log("Pending Commissions:", pendingCommissions);
console.log("Paid This Month:", paidThisMonth);
console.log("Total Paid:", totalPaid);
*/