import Container from './Container';
import Window from './Window';
import Section from './Section';

/* ---------------------------- Exports & Typing ---------------------------- */
// Mimic React's subcomponent architecture for exporting
// so we can use both <ScrollTrackingGroup>
// and <ScrollTrackingGroup.Section>
type ScrollTrackingGroupHOC = typeof Container & {
  Section: typeof Section;
  Window: typeof Window;
};

/**
 * Tracks a group of `Sections` (divs) so that when a `Section` is scrolled into a `window` defined by two `offsets`
 *      it is seen as the current Section and fires `onScrolledToChange`.
 */
export const ScrollTrackingGroupHOC = { ...Container, Section, Window } as ScrollTrackingGroupHOC;

export const ScrollTrackingGroup = { Container, Section, Window };
