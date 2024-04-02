import { Box } from '@mui/material'
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { subSeconds } from 'date-fns'
import ja from 'date-fns/locale/ja'
import { useMemo, useState } from 'react'

import type { SelectedDateTimeValidationError } from '../../../../types'

export const CalendarInput = () => {
  const [selectedDateTime, setSelectedDateTime] = useState<Record<'startDateTime' | 'endDateTime', Date | null>>({
    startDateTime: null,
    endDateTime: null,
  })
  const [error, setError] = useState<Record<'startDateTimeError' | 'endDateTimeError', SelectedDateTimeValidationError | null>>({
    startDateTimeError: null,
    endDateTimeError: null,
  })

  const createErrorMsg = (error: SelectedDateTimeValidationError) => {
    switch (error) {
      case 'minTime': {
        return '現在より前の日時は選択できません'
      }

      case 'startDateTime': {
        return '終了日時より前の日時を選択してください'
      }

      case 'endDateTime': {
        return '開始日時より後の日時を選択してください'
      }

      case 'invalidDate': {
        return 'Your date is not valid'
      }

      default: {
        return ''
      }
    }
  }

  const startDateErrorMessage = useMemo(() => {
    return createErrorMsg(error.startDateTimeError)
  }, [error.startDateTimeError])

  const endDateErrorMessage = useMemo(() => {
    return createErrorMsg(error.endDateTimeError)
  }, [error.endDateTimeError])

  const handleDateTimeChange = (date: Date | null, key: 'startDateTime' | 'endDateTime') => {
    switch (key) {
      case 'startDateTime': {
        setSelectedDateTime((prev) => ({
          ...prev,
          startDateTime: date,
        }))
        if (date && selectedDateTime.endDateTime && date > selectedDateTime.endDateTime) {
          // 開始日時が終了日時より後の場合はエラーを設定
          setError({
            ...error,
            startDateTimeError: 'startDateTime',
          })
        } else {
          setError({
            ...error,
            startDateTimeError: null,
          })
        }
        break
      }

      case 'endDateTime': {
        setSelectedDateTime((prev) => ({
          ...prev,
          endDateTime: date,
        }))
        if (selectedDateTime.startDateTime && date && selectedDateTime.startDateTime > date) {
          // 終了日時は開始日時より後でなければなりません
          setError({
            ...error,
            endDateTimeError: 'endDateTime',
          })
        } else {
          setError({
            ...error,
            endDateTimeError: null,
          })
        }
        break
      }
    }
  }

  // 1秒前の日時
  const secondBeforeNow = useMemo(() => subSeconds(new Date(), 1), [])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <Box display="flex" alignItems="center" justifyContent="center" gap={2} my={2}>
        <DateTimePicker
          label="開始日時を選択"
          value={selectedDateTime.startDateTime}
          onChange={(date) => handleDateTimeChange(date, 'startDateTime')}
          onError={(newError) => setError({ ...error, startDateTimeError: newError })}
          slotProps={{
            textField: {
              helperText: startDateErrorMessage,
            },
          }}
          // 1秒前の日時以下ならエラー
          minDateTime={secondBeforeNow}
          // 終了日時を最大値として設定（この設定の場合メモ化したエラーメッセージは不要）
          maxDateTime={selectedDateTime.endDateTime}
          sx={{ width: '180px', bgcolor: 'white' }}
        />
        <DateTimePicker
          label="終了日時を選択"
          value={selectedDateTime.endDateTime}
          onChange={(date) => handleDateTimeChange(date, 'endDateTime')}
          onError={(newError) => setError({ ...error, endDateTimeError: newError })}
          slotProps={{
            textField: {
              helperText: endDateErrorMessage,
            },
          }}
          // 開始日時を最小値として設定（この設定の場合メモ化したエラーメッセージは不要）
          minDateTime={selectedDateTime.startDateTime}
          sx={{ width: '180px', bgcolor: 'white' }}
        />
      </Box>
    </LocalizationProvider>
  )
}
