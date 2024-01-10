import { DiaryEntry, NewDiaryEntry, NoSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaires: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaires

export const findById = (id: number): NoSensitiveInfoDiaryEntry | undefined => {
  const entry = diaires.find(d => d.id === id)
  if (entry !== undefined) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NoSensitiveInfoDiaryEntry[] => diaires.map(({ comment, ...rest }) => ({
  ...rest
}))

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: diaires.length + 1,
    ...newDiaryEntry
  }
  diaires.push(newDiary)
  return newDiary
}
