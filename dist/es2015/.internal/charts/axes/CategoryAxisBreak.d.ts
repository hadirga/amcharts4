/**
 * A module which defines functionality related to Category Axis Break.
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { AxisBreak, IAxisBreakProperties, IAxisBreakAdapters, IAxisBreakEvents } from "./AxisBreak";
import { CategoryAxis } from "./CategoryAxis";
/**
 * ============================================================================
 * REQUISITES
 * ============================================================================
 * @hidden
 */
/**
 * Defines properties for [[CategoryAxisBreak]].
 */
export interface ICategoryAxisBreakProperties extends IAxisBreakProperties {
    /**
     * Category break starts on.
     */
    startCategory?: string;
    /**
     * Category break ends on.
     */
    endCategory?: string;
}
/**
 * Defines events for [[CategoryAxisBreak]].
 */
export interface ICategoryAxisBreakEvents extends IAxisBreakEvents {
}
/**
 * Defines adapters for [[CategoryAxisBreak]].
 *
 * @see {@link Adapter}
 */
export interface ICategoryAxisBreakAdapters extends IAxisBreakAdapters, ICategoryAxisBreakProperties {
}
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Base class to define "breaks" in axes
 * @see {@link ICategoryAxisBreakEvents} for a list of available events
 * @see {@link ICategoryAxisBreakAdapters} for a list of available Adapters
 */
export declare class CategoryAxisBreak extends AxisBreak {
    /**
     * Defines available properties.
     */
    _properties: ICategoryAxisBreakProperties;
    /**
     * Defines available adapters.
     */
    _adapter: ICategoryAxisBreakAdapters;
    /**
     * Defines available events.
     */
    _events: ICategoryAxisBreakEvents;
    /**
     * Defines the type of the Axis this break is used for.
     */
    _axisType: CategoryAxis;
    /**
     * Constructor
     */
    constructor();
    /**
     * Pixel position of the break's start.
     *
     * @return Position (px)
     * @readonly
     */
    get startPosition(): number;
    /**
     * Pixel position of the break's end.
     *
     * @return Position (px)
     * @readonly
     */
    get endPosition(): number;
    /**
     * A category break starts on.
     *
     * @param value Start category
     */
    set startCategory(value: string);
    /**
     * @return Start category
     */
    get startCategory(): string;
    /**
     * A category break ends on.
     *
     * @param value  End category
     */
    set endCategory(value: string);
    /**
     * @return End category
     */
    get endCategory(): string;
    /**
     * An index of start category.
     *
     * @param value  Value
     */
    set startValue(value: number);
    /**
     * @return Value
     */
    get startValue(): number;
    /**
     * An index of end category or a end value.
     *
     * @param value  Value
     */
    set endValue(value: number);
    /**
     * @return Value
     */
    get endValue(): number;
}
