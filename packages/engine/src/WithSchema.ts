abstract class WithSchema<S> {
  abstract get schema(): S

  toJSON() {
    return this.schema
  }
}

export default WithSchema
