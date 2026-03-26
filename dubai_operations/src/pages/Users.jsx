import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import SearchBar from '../components/SearchBar'
import SortFilter from '../components/SortFilter'
import Pagination from '../components/Pagination'
import SkeletonCard from '../components/SkeletonCard'
import CardGrid from '../components/CardGrid'

function Users() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users")

  const [search, setSearch] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")
  const [filter, setFilter] = useState("")
  const [page, setPage] = useState(1)

  if (error) return <p>{error}</p>

  // ✅ FILTER (name + city)
  let filtered = data.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) &&
    user.address.city.toLowerCase().includes(filter.toLowerCase())
  )

  // ✅ SORT
  filtered.sort((a, b) =>
    sortOrder === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  )

  // ✅ PAGINATION
  const perPage = 6
  const totalPages = Math.ceil(filtered.length / perPage)

  const paginated = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  )

  return (
    <div>
      <h2>Users</h2>

      <SearchBar search={search} setSearch={setSearch} />

      <SortFilter
        type="users"
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        filter={filter}
        setFilter={setFilter}
      />

      {loading ? (
        Array(6).fill().map((_, i) => <SkeletonCard key={i} />)
      ) : (
        <CardGrid data={paginated} type="users" />
      )}

      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default Users