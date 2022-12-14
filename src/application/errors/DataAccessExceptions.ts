abstract class DataAccessException { }

class ItemNotFoundException implements DataAccessException {
    constructor(
        public givenId?: number
    ) { }
}

class DataAccessOperationException implements DataAccessException {
    constructor(public error: string) { }
}

export { DataAccessException, ItemNotFoundException, DataAccessOperationException }