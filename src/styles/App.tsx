// References: 3.2. Component Library (Pages)
// This is the root component that will eventually handle routing to all our pages.

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-neutral-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary-blue-600">Frank</h1>
        <p className="mt-2 text-neutral-700">Frontend Application Skeleton</p>
        <p className="mt-4 text-sm text-neutral-500">Next step: Implement the MainLayout template and routing.</p>
      </div>
    </div>
  )
}

export default App
