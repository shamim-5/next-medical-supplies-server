import { z } from 'zod';

const create = z.object({
body: z.object({
  objField: z.string({
      required_error: 'Title is required'
  }),
  arrMedicalEquipment: z
      .array(
          z.object({
              medicalEquipmentId: z.string({})
          })
      )
      .optional()
      })
});

export const MedicalEquipmentValidation = {
 create
};
