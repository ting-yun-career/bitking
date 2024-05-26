import Image, { StaticImageData } from "next/image";
import btc32color from "cryptocurrency-icons/32/color/btc.png";
import eth32color from "cryptocurrency-icons/32/color/eth.png";
import sol32color from "cryptocurrency-icons/32/color/sol.png";
import ltc32color from "cryptocurrency-icons/32/color/ltc.png";
import bnb32color from "cryptocurrency-icons/32/color/bnb.png";
import xlm32color from "cryptocurrency-icons/32/color/xlm.png";
import doge32color from "cryptocurrency-icons/32/color/doge.png";
import usdt32color from "cryptocurrency-icons/32/color/usdt.png";
import generic32color from "cryptocurrency-icons/32/color/generic.png";

interface Props {
  symbol: string,
  size: number,
}

const smallMap: { [key: string]: StaticImageData } = {
  'btc': btc32color,
  'eth': eth32color,
  'sol': sol32color,
  'ltc': ltc32color,
  'bnb': bnb32color,
  'xlm': xlm32color,
  'doge': doge32color,
  'usdt': usdt32color,
  'generic': generic32color
}

const CryptoCoin = ({ symbol, size }: Props) => {
  const img = smallMap[symbol] ?? smallMap['generic'];
  return <Image src={img} alt={`KKK Image of ${symbol}`} width={size} height={size} />
}

export default CryptoCoin;
