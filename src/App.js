import logo from './logo.svg';
import './App.css';
import FirstPage from './pages/5_new/FirstPage.js';
import ProdGuide from './pages/1_guide/ProdGuide.js'
import CstInfoAdd from './pages/1_guide/CstInfoAdd.js';
import PreGuide from './pages/5_new/PreGuide.js';
import JudgeStep1 from './pages/2_judge/JudgeStep1.js';
import JudgeStep2 from './pages/2_judge/JudgeStep2.js';
import JudgeStep3 from './pages/5_new/JudgeStep3.js';
import CsInfoAgree from './pages/2_judge/CsInfoAgree.js';
import CsInfoAgree2 from './pages/2_judge/CsInfoAgree2';
import DocCollectList from './pages/2_judge/DocCollectList';
import JudgeResult from './pages/2_judge/JudgeResult.js';
import JudgeDocResult from './pages/2_judge/JudgeDocResult.js';
import ProCheck from './pages/2_judge/ProCheck.js';
import PreJudgeInfoAdd from './pages/2_judge/PreJudgeInfoAdd.js';
import PreJudgeResult from './pages/2_judge/PreJudgeResult.js';
import LoanCheck1 from './pages/3_apply/LoanCheck1.js';
import LoanCheck2 from './pages/3_apply/LoanCheck2.js';
import LoanCheck3 from './pages/3_apply/LoanCheck3.js';
import LoanFail1 from './pages/3_apply/LoanFail1.js';
import LoanFail2 from './pages/3_apply/LoanFail2';
import LoanCancle from './pages/3_apply/LoanCancle.js';
import StartLoan1 from './pages/4_execute/StartLoan1.js';
import StartLoan2 from './pages/4_execute/StartLoan2.js';
import LoanContract from './pages/4_execute/LoanContract.js';
import LoanClause from './pages/4_execute/LoanClause.js';
import LoanEnd from './pages/4_execute/LoanEnd.js';

import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { pdfjs } from 'react-pdf';


function App() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return (
    <div className="App">
      <Link onClick={() => {

      }} to="/">홈</Link> ▷	▶
      <Link onClick={() => {

      }} to="/firstpage">첫화면</Link> ▷	▶
      <Link onClick={() => {

      }} to="/cstinfoadd">고객정보등록</Link> ▷	▶
      <Link onClick={() => {

      }} to="/prodguide">상품안내</Link> ▷	▶

      <Link onClick={() => {

      }} to="/preguide">사전안내</Link> ▷	▶
      <Link onClick={() => {

      }} to="/judgestep1">심사준비 1단계</Link> ▷	▶
      <Link onClick={() => {

      }} to="/judgestep2">심사준비 2단계</Link> ▷	▶
      <Link onClick={() => {

      }} to="/judgestep3">심사준비 3단계</Link> ▷	▶
      <Link onClick={() => {

      }} to="/judgeresult">적합성.적정성판단결과</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/csinfoagree">고객정보 위임 동의</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/csinfoagree2">고객정보 위임 동의2</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/doccollectlist">서류수집내역</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/judgedocresult">사전심사 서류 수집현황</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/procheck">대출 진행상태 조회</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/PreJudgeInfoAdd">사전심사 정보입력</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/prejudgeresult">사전심사 신청완료</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/loancheck1">신청중인 대출 진행/조회/취소</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/loancheck2">신청중인 대출 진행/조회/취소 (보증심사중)</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/loancheck3">신청중인 대출 진행/조회/취소 (심사완료)</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/loanfail1">신청중인 대출 진행/조회/취소 (보증거절1)</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/loanfail2">신청중인 대출 진행/조회/취소 (검증거절2)</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/loancancle">보증신청 취소</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/startloan1">대출 실행1</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/startloan2">대출 실행2</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/loancontract">여신거래약정서</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/loanclause">대출약관</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/loanend">대출실행완료</Link> ▷ ▶




      <Link onClick={() => {

      }} to="/"></Link>
      <Routes>
        <Route path="/firstpage" element={<FirstPage />} />
        <Route path="/cstinfoadd" element={<CstInfoAdd />} />
        <Route path="/prodguide" element={<ProdGuide />} />
        <Route path="/preguide" element={<PreGuide />} />
        <Route path="/judgestep1" element={<JudgeStep1 />} />
        <Route path="/judgestep2" element={<JudgeStep2 />} />
        <Route path="/judgestep3" element={<JudgeStep3 />} />
        <Route path="/csinfoagree" element={<CsInfoAgree />} />
        <Route path="/csinfoagree2" element={<CsInfoAgree2 />} />
        <Route path="/doccollectlist" element={<DocCollectList />} />
        <Route path="/judgeresult" element={<JudgeResult />} />
        <Route path="/judgedocresult" element={<JudgeDocResult />} />
        <Route path="/procheck" element={<ProCheck />} />
        <Route path="/PreJudgeInfoAdd" element={<PreJudgeInfoAdd />} />
        <Route path="/prejudgeresult" element={<PreJudgeResult />} />
        <Route path="/loancheck1" element={<LoanCheck1 />} />
        <Route path="/loancheck2" element={<LoanCheck2 />} />
        <Route path="/loancheck3" element={<LoanCheck3 />} />
        <Route path="/loanfail1" element={<LoanFail1 />} />
        <Route path="/loanfail2" element={<LoanFail2 />} />
        <Route path="/loancancle" element={<LoanCancle />} />
        <Route path="/startloan1" element={<StartLoan1 />} />
        <Route path="/startloan2" element={<StartLoan2 />} />
        <Route path="/loancontract" element={<LoanContract />} />
        <Route path="/loanclause" element={<LoanClause />} />
        <Route path="/loanend" element={<LoanEnd />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
