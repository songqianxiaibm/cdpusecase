export interface Customer {
    JOB_NAME: string;
    TIMESTAMP: string;
    TRANSACTION_ID: string;
    message: string;
}

export interface CustomerSource {
    source: Customer;
}
