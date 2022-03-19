import { sum } from "./sum/sum";
import {server} from './server/server'
console.log(sum(1, 2))

server.listen(3000, () => console.log('listening on 3000 port'))
