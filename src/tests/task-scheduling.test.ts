import { taskScheduling } from '../problems/task-scheduling'

describe('task-scheduling', () => {
  test('case 1: basic scenario with no cooldown needed', () => {
    const tasks = ['A', 'A', 'A', 'B', 'B', 'B']
    const n = 2
    expect(taskScheduling(tasks, n)).toBe(8)
  })

  test('case 2: tasks requiring cooldown', () => {
    const tasks = ['A', 'A', 'A', 'B', 'B', 'B']
    const n = 0
    expect(taskScheduling(tasks, n)).toBe(6)
  })

  test('case 3: mixed tasks with cooldown', () => {
    const tasks = ['A', 'A', 'A', 'B', 'B', 'C']
    const n = 2
    expect(taskScheduling(tasks, n)).toBe(7)
  })

  test('case 4: empty task list', () => {
    const tasks: string[] = []
    const n = 2
    expect(taskScheduling(tasks, n)).toBe(0)
  })

  test('case 5: single task type', () => {
    const tasks = ['A', 'A', 'A', 'A']
    const n = 3
    expect(taskScheduling(tasks, n)).toBe(13)
  })
})
