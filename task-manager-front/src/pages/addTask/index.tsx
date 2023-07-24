import {
  Buttons,
  Container,
  Deadline,
  Description,
  FormAddTask,
  ResponsablePriority,
  Title,
} from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { api } from '../../server/api'
import { useNavigate } from 'react-router-dom'

const addTaskValidadeSchema = z.object({
  title: z.string(),
  description: z.string(),
  responsible: z.enum([
    'Select',
    'Gustavo Theot',
    'João Gomes',
    'Pedro Otávio',
  ]),
  priority: z.enum(['Select', 'Baixa', 'Média', 'Alta']),
  deadline: z.string(),
  status: z.boolean().default(false),
})

type AddTaskFormInput = z.infer<typeof addTaskValidadeSchema>

export function AddTask() {
  const { register, handleSubmit, reset } = useForm<AddTaskFormInput>({
    resolver: zodResolver(addTaskValidadeSchema),
    defaultValues: {
      title: '',
      description: '',
      responsible: undefined,
      priority: undefined,
      deadline: '',
    },
  })
  const history = useNavigate()

  async function handleAddTask(data: AddTaskFormInput) {
    const { title, description, responsible, priority, deadline } = data

    try {
      await api.post('/task', {
        title,
        description,
        responsible,
        priority,
        deadline,
      })
    } catch (error) {
      alert(error)
    }

    reset()
  }

  function pageListTasks() {
    history('/listTask')
  }

  return (
    <Container>
      <FormAddTask onSubmit={handleSubmit(handleAddTask)}>
        <Title>
          <label htmlFor="">Título:</label>
          <input
            type="text"
            placeholder="Qual o título da sua tarefa"
            {...register('title')}
          />
        </Title>

        <Description>
          <label htmlFor="">Descrição:</label>
          <textarea
            placeholder="Qual a descrição da sua tarefa"
            {...register('description')}
          />
        </Description>

        <ResponsablePriority>
          <div>
            <label htmlFor="responsible">Responsável:</label>
            <select id="responsible" {...register('responsible')}>
              {addTaskValidadeSchema.shape.responsible._def.values.map(
                (value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ),
              )}
            </select>
          </div>

          <div>
            <label htmlFor="priority">Prioridade:</label>
            <select id="priority" {...register('priority')}>
              {addTaskValidadeSchema.shape.priority._def.values.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </ResponsablePriority>

        <Deadline>
          <label htmlFor="">Deadline:</label>
          <input
            type="text"
            placeholder="dd / mm / yyyy"
            {...register('deadline')}
          />
        </Deadline>

        <Buttons>
          <button type="submit">Cadastrar</button>
          <button onClick={pageListTasks}>Tasks</button>
        </Buttons>
      </FormAddTask>
    </Container>
  )
}
