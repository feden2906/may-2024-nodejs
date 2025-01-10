export const MeasureExecutionTime = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor => {
  const originalMethod = descriptor.value;
  descriptor.value = async function (...args: any[]): Promise<any> {
    const start = performance.now();
    try {
      return originalMethod.apply(this, [...args, 2]);
    } finally {
      const end = performance.now();
      console.log(
        `Execution time of ${propertyKey}: ${(end - start).toFixed(2)} ms`,
      );
    }
  };
  return descriptor;
};
