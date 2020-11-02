declare namespace THREE {
  export class DecalGeometry extends Geometry {
    constructor(meshToIntersect: Geometry, position: Vector3, direction: Vector3, dimensions: Vector3, check?: Vector3);
  }
}