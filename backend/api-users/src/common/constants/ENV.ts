import jetEnv, { num, str } from 'jet-env';
import { isEnumVal } from 'jet-validators';

import { NodeEnvs } from '.';


/******************************************************************************
                                 Setup
******************************************************************************/

const ENV = jetEnv({
  NodeEnv: isEnumVal(NodeEnvs),
  Port: num,
  DbHost: str,
  DbUser: str,
  DbPassword: str,
  DbName: str,
});


/******************************************************************************
                            Export default
******************************************************************************/

export default ENV;
