import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { UserProfile } from '@component/app/_components/userprofile'
import mockRouter from 'next-router-mock';
import { useRouter } from 'next/router';
import { AppRouterContextProviderMock } from '../../app-router-context-provider-mock';


jest.mock('next/router', () => jest.requireActual('next-router-mock'))

const ExampleComponent = ({ href = '' }) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(href)}>
      The current route is: "{router.asPath}"
    </button>
  );
}

describe('next-router-mock', () => {
  it('mocks the useRouter hook', () => {
    // Set the initial url:
    mockRouter.push("/initial-path");

    // Render the component:
    render(<ExampleComponent href="/foo?bar=baz" />);
    expect(screen.getByRole('button')).toHaveTextContent(
      'The current route is: "/initial-path"'
    );

    // Click the button:
    fireEvent.click(screen.getByRole('button'));

    // Ensure the router was updated:
    expect(mockRouter).toMatchObject({
      asPath: "/foo?bar=baz",
      pathname: "/foo",
      query: { bar: "baz" },
    });
  });
});

describe('UserProfile snapshot', () => {
  it('matches snapshot', () => {
    const push = jest.fn()
    const { container } = render(<AppRouterContextProviderMock router={{ push }}><UserProfile /></AppRouterContextProviderMock>)

    expect(container).toMatchSnapshot()
  })
})