class ApplicationError {
    constructor(
        public message: string,
        public details?: string,
        // public stack?: string,
    ) { }
}

export default ApplicationError;