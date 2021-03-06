import {Entity, model, property} from '@loopback/repository';

@model()
export class PlantData extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  espId?: string;

  @property({
    type: 'number',
  })
  soilMoisture?: number;

  @property({
    type: 'number',
  })
  humidity?: number;

  @property({
    type: 'number',
  })
  temperature?: number;

  @property({
    type: 'number',
  })
  watertank?: number;

  @property({
    type: 'date',
    required: true,
  })
  measuringTime: string;

  @property({
    type: 'boolean',
  })
  water?: boolean;


  constructor(data?: Partial<PlantData>) {
    super(data);
  }
}

export interface PlantDataRelations {
  // describe navigational properties here
}

export type PlantDataWithRelations = PlantData & PlantDataRelations;
