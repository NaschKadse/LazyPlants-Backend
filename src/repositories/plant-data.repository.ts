import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {PlantData, PlantDataRelations} from '../models';

export class PlantDataRepository extends DefaultCrudRepository<
  PlantData,
  typeof PlantData.prototype.espId,
  PlantDataRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(PlantData, dataSource);
  }
}
