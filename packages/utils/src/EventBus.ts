class EventBus<
  K extends string | symbol = string | symbol,
  Args extends {
    [k in K]: any[]
  } = { [k in K]: any[] },
> {
  private _events = new Map<K, Set<(...args: any[]) => unknown>>()

  emit(eventKey: K, ...args: Args[K]) {
    const event = this._events.get(eventKey)
    if (!event) return

    for (const fn of event.keys()) {
      fn(...args)
    }
  }

  on(eventKey: K, callback: (...args: Args[K]) => unknown) {
    let event = this._events.get(eventKey)
    if (!event) {
      event = new Set()
      this._events.set(eventKey, event)
    }
    event.add(callback)
  }

  once(eventKey: K, callback: (...args: Args[K]) => unknown) {
    const _cb = (...args: Args[K]) => {
      this.off(eventKey, _cb)
      callback(...args)
    }
    this.on(eventKey, _cb)
  }

  off(eventKey: K, callback: (...args: Args[K]) => unknown) {
    const event = this._events.get(eventKey)
    if (!event) return

    event.delete(callback)
  }

  offAll(eventKey?: K) {
    if (eventKey) {
      this._events.delete(eventKey)
    } else {
      this._events.clear()
    }
  }
}

export default EventBus
