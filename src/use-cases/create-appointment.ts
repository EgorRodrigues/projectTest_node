import { Appointment } from "../entities/appointment"

interface CreateAppointmetRequest {
  customer: string
  startsAt: Date
  endsAt: Date
}

type CreateAppointmetResponse = Appointment

// export class CreateAppointment {
//   async execute(request: CreateAppointmetRequest): Promise<CreateAppointmetResponse> {
//     const appointment = new Appointment(request)

//     return appointment
//   }
// } 
/** Acima trata-se do mesmo códio do de baixo */

export class CreateAppointment {
  async execute({
    customer,
    startsAt,
    endsAt
  }: CreateAppointmetRequest): Promise<CreateAppointmetResponse> {
    const appointment = new Appointment({
      customer,
      startsAt,
      endsAt
    })

    return appointment
  }
}