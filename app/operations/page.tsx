import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_OPERATIONS } from '@/lib/queries'
import { OperationsData } from '@/lib/types'
import Header from '../components/Header'
import OperationCard from '../components/OperationCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Operations | First Response Alliance',
  description: 'View our active and completed relief operations worldwide.',
}

async function getOperations() {
  try {
    const client = getClient()
    const data = await client.raw(GET_OPERATIONS, { first: 50 })
    return data?.nodeOperations?.nodes || []
  } catch (error) {
    console.error('Error fetching operations:', error)
    return []
  }
}

export default async function OperationsPage() {
  const items = await getOperations()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Relief Operations
            </h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Active and completed humanitarian operations around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Operations Yet</h2>
              <p className="text-gray-500">Operations will appear here once content is imported.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: any) => (
                <OperationCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
