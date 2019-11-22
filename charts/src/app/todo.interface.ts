export interface Todo{
    took: string,
    timed_out: string,
    _shards: any[],
    hit0: any[],
}
export interface hits{
    total: string,
    max_score: string,
    _hits:hit[]
}
export interface hit{
    _index: string,
    _source: source[],
}
export interface source{
    RATIO:string,
}

