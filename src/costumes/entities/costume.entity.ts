import { Costume, Size} from "generated/prisma/client";

export class CostumeEntity implements Costume {
  /**
   * A jelmez fajtája
   * @example Darth Vader jelmez
   */

  name: string;

  /**
   * Egyedi ID
   * @example 1
   */
  
  id: number;

  /**
  * A jelmez mérete (S/M/L/XL)
  * @example "M"
  */
 
  size: Size;

  /**
   * A jelmez készleten lévő darabszáma
   * @example 12
   */

  stock: number;  
}
