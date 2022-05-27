import { Metric } from "./analytics-demo.interface";

export interface AnalyticsImplementation{
    recordEvent(metric: Metric): void;
}