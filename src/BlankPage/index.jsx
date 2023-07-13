import { Link } from "react-router-dom";
import {
  Group17 
} from '../ui-components';

const BlankPage = () => {
  const pageStyle = {
    marginLeft: "20px" // 左の余白を追加するためのスタイル
  };

  return (
    <>
      <br /> {/* 改行を追加 */}
      <div style={pageStyle}> {/* スタイルを適用 */}
      <Group17 />
      </div>
      <br /> {/* 改行を追加 */}
      <div style={pageStyle}> {/* スタイルを適用 */}
        空っぽのページです。
      </div>
      <br /> {/* 改行を追加 */}
      <div>
        <Link to="/blank">ブランクページへ</Link>
      </div>
      <div>
        <Link to="/my_page">マイページへ</Link>
      </div>
    </>
  );
};

export default BlankPage;