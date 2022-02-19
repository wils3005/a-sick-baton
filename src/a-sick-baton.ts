import { z } from "zod";

export const formatError = (error: unknown) => {
  if (error instanceof z.ZodError) {
    const { name, issues } = error;
    return { name, issues };
  } else if (error instanceof Error) {
    const { name, message, stack } = error;
    return { name, message, stack };
  } else {
    return String(error);
  }
};

export const handler = (event: unknown, context: unknown) => {
  const log = { event, context };
  try {
  } catch (error) {
    Object.assign(log, { error: formatError(error) });
  } finally {
    process.stdout.write(JSON.stringify(log));
  }
};
