import { Check, Pen, Trash } from 'phosphor-react'
import {
  SearchForm,
  DescriptionTitle,
  NumberInput,
  ResponsableStatus,
  Container,
  ListTasks,
  Buttons,
} from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { api } from '../../server/api'
import { useNavigate } from 'react-router-dom'

const searchTaskValidateSchema = z.object({
  number: z
    .string()
    .transform((str) => {
      const parsedNumber = parseInt(str)
      return isNaN(parsedNumber) ? undefined : parsedNumber
    })
    .optional(),
  titleDescription: z.string().optional(),
  responsible: z.string().optional(),
  status: z.string().optional(),
})

type SearchTaskFormInput = z.infer<typeof searchTaskValidateSchema>

interface Task {
  id: number
  title: string
  description: string
  responsible: string[]
  priority: any[]
  deadline: string
  status: boolean
}

export function ListTask() {
  const [list, setList] = useState<Task[]>([])
  const history = useNavigate()
  const { register, handleSubmit } = useForm<SearchTaskFormInput>({
    resolver: zodResolver(searchTaskValidateSchema),
    defaultValues: {
      number: '' || undefined,
      titleDescription: '',
      responsible: '',
      status: '',
    },
  })

  async function fetchApi() {
    try {
      const response = await api.get('/task')
      setList(response.data)
    } catch (error) {
      alert(error)
    }
  }

  async function handleDelete(taskId: number) {
    try {
      await api.delete(`/task/${taskId}`)
      const updatedList = list.filter((task) => task.id !== taskId)
      setList(updatedList)
    } catch (error) {
      alert('Error deleting task')
    }
  }

  async function handleChecked(taskId: number) {
    const updatedList = await Promise.all(
      list.map(async (task) => {
        if (task.id === taskId) {
          const updatedTask = {
            ...task,
            status: !task.status,
          }

          try {
            const response = await api.put(`/task/${taskId}`, updatedTask)
            return response.data
          } catch (error) {
            alert('Error in updating task')
          }
        }
        return task
      }),
    )

    setList(updatedList)
  }

  async function handleSearchTask(data: SearchTaskFormInput) {
    if (data.number !== undefined) {
      try {
        const response = await api.get(`/task/${data.number}`)
        const searchData = Array.isArray(response.data)
          ? response.data
          : [response.data]

        setList(searchData)
      } catch (error) {
        alert('Número com referencia ao ID não encontrado')
      }
    }

    if (data.titleDescription !== '') {
      try {
        const response = await api.get(`/task/search/titleDescription`, {
          params: {
            title: data.titleDescription,
          },
        })
        setList(response.data)
      } catch (error) {
        alert('Titulo não encontrado')
      }
    }

    if (data.responsible !== '') {
      try {
        const response = await api.get(`/task/search/responsible`, {
          params: {
            responsible: data.responsible,
          },
        })
        setList(response.data)
      } catch (error) {
        alert('Responsável não possuir tasks')
      }
    }

    if (data.status !== '') {
      try {
        const response = await api.get(`/task/search/status`, {
          params: {
            status: data.status,
          },
        })
        setList(response.data)
      } catch (error) {
        alert('Estatos não encontrado')
      }
    }
  }

  function pageAddTask() {
    history('/')
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit(handleSearchTask)}>
        <NumberInput>
          <label htmlFor="number">Número: </label>
          <input type="text" id="number" {...register('number')} />
        </NumberInput>

        <DescriptionTitle>
          <label htmlFor="titleAndDescription">Título/Descrição: </label>
          <input
            type="text"
            placeholder="Qual descrição deseja procurar?"
            id="titleAndDescription"
            {...register('titleDescription')}
          />
        </DescriptionTitle>

        <ResponsableStatus>
          <div>
            <label htmlFor="responsible">Responsável: </label>
            <select id="responsible" {...register('responsible')}>
              <option value="">Select</option>
              <option value="Gustavo Theot">Gustavo Theot</option>
              <option value="João Gomes">João Gomes</option>
              <option value="Pedro Otávio">Pedro Otávio</option>
            </select>
          </div>

          <div>
            <label htmlFor="status">Situação:</label>
            <select id="status" {...register('status')}>
              <option value="">Select</option>

              <option value="false">Em andamento</option>
              <option value="true">Concluída</option>
            </select>
          </div>
        </ResponsableStatus>

        <Buttons>
          <button type="submit">Buscar</button>
          <button onClick={pageAddTask}>Criar Task</button>
        </Buttons>
      </SearchForm>

      <ListTasks>
        <table>
          <thead>
            <tr>
              <th>Número</th>
              <th>Título</th>
              <th>Responsável</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>

          <tbody>
            {list.map((task) => {
              return (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td>{task.responsible}</td>
                  {task.status ? <td>Concluído</td> : <td>Em andamento</td>}
                  <td>
                    <button>
                      <Pen size={24} />
                    </button>
                    <button onClick={() => handleDelete(task.id)}>
                      <Trash size={24} />
                    </button>
                    <button onClick={() => handleChecked(task.id)}>
                      <Check size={24} />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ListTasks>
    </Container>
  )
}
