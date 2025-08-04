import PatternGroup from '@/components/PatternGroup';

/**
 * Page component for a group of algorithm problems.
 *
 * @param {Object} props - The props for the component.
 * @param {Object} props.params - The route parameters.
 * @param {string} props.params.group - The name of the problem group.
 */
export default function Page({ params }: { params: { group: string } }) {
  return <PatternGroup params={params} />;
}
