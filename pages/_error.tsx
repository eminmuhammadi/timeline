import { NextPageContext } from 'next'

interface ErrorComponentProps {
  statusCode?: number
}

const ErrorComponent = ({ statusCode }: ErrorComponentProps): JSX.Element => {
  if (statusCode === 404) {
    return (
      <div>
        <p className="text-xl p-2">The page you are looking for does not exist.</p>
      </div>
    )
  }

  return (
    <div>
      <p className="text-xl p-2">An error {statusCode} occurred on server</p>
    </div>
  )
}

ErrorComponent.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorComponent
