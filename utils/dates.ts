import { format } from 'date-fns' 

export const formatDate = (dateString: string) => format(new Date(dateString), "MM/dd/yyyy HH:mm:ss");