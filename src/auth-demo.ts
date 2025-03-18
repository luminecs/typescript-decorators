function requireRole(role: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value
    descriptor.value = function (...args: any[]) {
      const userRole = 'admin' // 假设从上下文获取
      if (userRole !== role) {
        throw new Error(`Permission denied: ${role} role required`)
      }
      return originalMethod.apply(this, args)
    }
  }
}

export class AdminPanel {
  @requireRole('admin')
  deleteUser(id: number) {
    console.log(`User ${id} deleted`)
  }
}

