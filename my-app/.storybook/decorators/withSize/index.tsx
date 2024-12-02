/**
 * Decorator to wrap the story in a div with a given height and width
 * @param Story
 * @param height css height values as string or number
 * @param width css width values as string or number
 * @returns A story which is wrapped in a div with a constant height and width
 */
const withSize = (Story, height: string | number, width: string | number) => (
  <div style={{ height, width, position: 'relative' }}>
    <Story />
  </div>
)

export default withSize
