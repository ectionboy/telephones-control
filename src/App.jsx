import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Layout from './components/Layout/Layout';
import GroupFirst from './components/Group/GroupFirst/GroupFirst';
import GroupSecond from './components/Group/GroupSecond/GroupSecond';
import GroupThird from './components/Group/GroupThird/GroupThird';
import GroupFourth from './components/Group/GroupFourth/GroupFourth';
import LayoutGroup from './components/LayoutGroup/LayoutGroup';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/group/first" element={<LayoutGroup><GroupFirst /></LayoutGroup>} />
        <Route path="/group/second" element={<LayoutGroup><GroupSecond /></LayoutGroup>} />
        <Route path="/group/third" element={<LayoutGroup><GroupThird /></LayoutGroup>} />
        <Route path="/group/fourth" element={<LayoutGroup><GroupFourth /></LayoutGroup>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};   
  //  {/* <Route path="/about" element={<Layout><About /></Layout>} /> */}
