import { Route, Routes } from 'react-router-dom'
import { AddTask } from './pages/addTask'
import { ListTask } from './pages/tasks'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AddTask />} />
      <Route path="/listTask" element={<ListTask />} />
    </Routes>
  )
}
