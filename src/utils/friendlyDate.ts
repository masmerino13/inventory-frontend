import { format } from 'date-fns';

export default (date: string) => format(new Date(date), 'dd/LL/yyyy hh:mm:ss a')
