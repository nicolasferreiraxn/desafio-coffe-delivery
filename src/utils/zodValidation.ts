import * as zod from 'zod'

export const zodValidation = zod.object({
  cep: zod.string().min(8).max(8),
  street: zod.string().min(3),
  number: zod.string().min(1),
  complement: zod.string().min(1),
  district: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().min(1),
  payment: zod.string().min(1),
})
