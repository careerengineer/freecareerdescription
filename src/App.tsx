import React, { useState } from 'react';
import { Download, HelpCircle, ChevronDown, ChevronUp, FileText, User, Award, Briefcase, Lock } from 'lucide-react';

const CareerStatementGenerator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [showGuide, setShowGuide] = useState({});
  
  const SECRET_PASSWORD = 'career2024';

  const [formData, setFormData] = useState({
    personalInfo: { name: '', birth: '', phone: '', email: '', address: '' },
    education: [{ school: '', major: '', degree: '', period: '', status: '' }],
    position: '',
    years: '',
    oneLineIntro: '',
    competency1: '',
    competency2: '',
    competency3: '',
    majorProject: '',
    techStack: '',
    careers: [{ company: '', department: '', position: '', role: '', period: '', isCurrentJob: false }],
    toolSkills: [{ tools: '', proficiency: '' }],
    languageSkills: [{ languages: '', proficiency: '' }],
    certifications: [{ name: '', issuer: '', date: '' }],
    publications: [{ title: '', journal: '', date: '', author: '' }],
    additionalStrength: '',
    projects: [{ company: '', name: '', period: '', role: '', situation: '', task: '', action: '', result: '', insight: '' }]
  });

  const handleLogin = () => {
    if (password === SECRET_PASSWORD) {
      setIsAuthenticated(true);
      setShowError(false);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              <Lock className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">비공개 페이지</h1>
            <p className="text-gray-600">경력기술서 생성기</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">비밀번호를 입력하세요</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                placeholder="비밀번호 입력"
              />
            </div>
            {showError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                비밀번호가 올바르지 않습니다.
              </div>
            )}
            <button
              onClick={handleLogin}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              접속하기
            </button>
          </div>
        </div>
      </div>
    );
  }

  const toggleGuide = (section) => {
    setShowGuide({ ...showGuide, [section]: !showGuide[section] });
  };

  const GuideToggleButton = ({ section, children }) => (
    <button onClick={() => toggleGuide(section)} className="w-full flex justify-between items-center text-left p-3 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
      <span className="font-semibold text-blue-800">{children}</span>
      {showGuide[section] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
    </button>
  );

  const updatePersonalInfo = (field, value) => {
    setFormData({
      ...formData,
      personalInfo: { ...formData.personalInfo, [field]: value }
    });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { school: '', major: '', degree: '', period: '', status: '' }]
    });
  };

  const updateEducation = (index, field, value) => {
    const newEducation = [...formData.education];
    newEducation[index][field] = value;
    setFormData({ ...formData, education: newEducation });
  };

  const removeEducation = (index) => {
    const newEducation = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: newEducation });
  };

  const addCareer = () => {
    setFormData({
      ...formData,
      careers: [...formData.careers, { company: '', department: '', position: '', role: '', period: '', isCurrentJob: false }]
    });
  };

  const updateCareer = (index, field, value) => {
    const newCareers = [...formData.careers];
    newCareers[index][field] = value;
    setFormData({ ...formData, careers: newCareers });
  };

  const removeCareer = (index) => {
    const newCareers = formData.careers.filter((_, i) => i !== index);
    setFormData({ ...formData, careers: newCareers });
  };

  const addToolSkill = () => {
    setFormData({
      ...formData,
      toolSkills: [...formData.toolSkills, { tools: '', proficiency: '' }]
    });
  };

  const updateToolSkill = (index, field, value) => {
    const newSkills = [...formData.toolSkills];
    newSkills[index][field] = value;
    setFormData({ ...formData, toolSkills: newSkills });
  };

  const removeToolSkill = (index) => {
    const newSkills = formData.toolSkills.filter((_, i) => i !== index);
    setFormData({ ...formData, toolSkills: newSkills });
  };

  const addLanguageSkill = () => {
    setFormData({
      ...formData,
      languageSkills: [...formData.languageSkills, { languages: '', proficiency: '' }]
    });
  };

  const updateLanguageSkill = (index, field, value) => {
    const newSkills = [...formData.languageSkills];
    newSkills[index][field] = value;
    setFormData({ ...formData, languageSkills: newSkills });
  };

  const removeLanguageSkill = (index) => {
    const newSkills = formData.languageSkills.filter((_, i) => i !== index);
    setFormData({ ...formData, languageSkills: newSkills });
  };

  const addCertification = () => {
    setFormData({
      ...formData,
      certifications: [...formData.certifications, { name: '', issuer: '', date: '' }]
    });
  };

  const updateCertification = (index, field, value) => {
    const newCerts = [...formData.certifications];
    newCerts[index][field] = value;
    setFormData({ ...formData, certifications: newCerts });
  };

  const removeCertification = (index) => {
    const newCerts = formData.certifications.filter((_, i) => i !== index);
    setFormData({ ...formData, certifications: newCerts });
  };

  const addPublication = () => {
    setFormData({
      ...formData,
      publications: [...formData.publications, { title: '', journal: '', date: '', author: '' }]
    });
  };

  const updatePublication = (index, field, value) => {
    const newPubs = [...formData.publications];
    newPubs[index][field] = value;
    setFormData({ ...formData, publications: newPubs });
  };

  const removePublication = (index) => {
    const newPubs = formData.publications.filter((_, i) => i !== index);
    setFormData({ ...formData, publications: newPubs });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { company: '', name: '', period: '', role: '', situation: '', task: '', action: '', result: '', insight: '' }]
    });
  };

  const removeProject = (index) => {
    const newProjects = formData.projects.filter((_, i) => i !== index);
    setFormData({ ...formData, projects: newProjects });
  };

  const updateProject = (index, field, value) => {
    const newProjects = [...formData.projects];
    newProjects[index][field] = value;
    setFormData({ ...formData, projects: newProjects });
  };

  const generateWordDocument = () => {
    let html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Malgun Gothic,sans-serif;line-height:1.8;padding:40px}h1{text-align:center;border-bottom:2px solid #000;padding-bottom:10px;margin-bottom:30px}h2{margin-top:30px;margin-bottom:15px;border-bottom:1px solid #000;padding-bottom:5px}h3{margin-top:20px;margin-bottom:10px;font-weight:bold}.info-table{width:100%;border-collapse:collapse;margin:20px 0}.info-table td{padding:8px;border:1px solid #000}.info-table td:first-child{font-weight:bold;width:120px}p{margin:10px 0}</style></head><body>';
    
    html += '<h1>경력기술서</h1>';
    html += '<h2>인적사항</h2><table class="info-table">';
    html += '<tr><td>성명</td><td>' + formData.personalInfo.name + '</td></tr>';
    html += '<tr><td>생년월일</td><td>' + formData.personalInfo.birth + '</td></tr>';
    html += '<tr><td>연락처</td><td>' + formData.personalInfo.phone + '</td></tr>';
    html += '<tr><td>이메일</td><td>' + formData.personalInfo.email + '</td></tr>';
    html += '<tr><td>주소</td><td>' + formData.personalInfo.address + '</td></tr>';
    html += '<tr><td>지원 직무</td><td>' + formData.position + '</td></tr>';
    html += '<tr><td>총 경력</td><td>' + formData.years + '년</td></tr>';
    html += '</table>';
    
    html += '<h2>학력사항</h2>';
    formData.education.forEach(edu => {
      html += '<p><strong>' + edu.school + '</strong> | ' + edu.major + ' | ' + edu.degree + ' | ' + edu.period + ' | ' + edu.status + '</p>';
    });
    
    html += '<h2>핵심역량</h2>';
    html += '<h3>1줄 포지셔닝</h3><p>' + formData.oneLineIntro.replace(/\n/g, '<br>') + '</p>';
    html += '<h3>핵심역량</h3>';
    html += '<p><strong>역량 1:</strong><br>' + formData.competency1.replace(/\n/g, '<br>') + '</p>';
    html += '<p><strong>역량 2:</strong><br>' + formData.competency2.replace(/\n/g, '<br>') + '</p>';
    html += '<p><strong>역량 3:</strong><br>' + formData.competency3.replace(/\n/g, '<br>') + '</p>';
    html += '<h3>대표 성과</h3><p>' + formData.majorProject.replace(/\n/g, '<br>') + '</p>';
    html += '<h3>핵심 기술 스택</h3><p>' + formData.techStack.replace(/\n/g, '<br>') + '</p>';
    
    html += '<h2>경력사항</h2>';
    formData.careers.forEach(career => {
      html += '<div><p><strong>' + career.company + '</strong> | ' + career.department + ' | ' + career.position;
      if (career.isCurrentJob) html += ' (재직중)';
      html += '</p><p>' + career.period + '</p>';
      html += '<p><strong>역할:</strong> ' + career.role.replace(/\n/g, '<br>') + '</p></div>';
    });
    
    html += '<h3>사용 가능 툴</h3>';
    formData.toolSkills.forEach(skill => {
      html += '<p>' + skill.tools + ' | 숙련도: ' + skill.proficiency + '</p>';
    });
    
    html += '<h3>사용 가능 언어</h3>';
    formData.languageSkills.forEach(skill => {
      html += '<p>' + skill.languages + ' | 숙련도: ' + skill.proficiency + '</p>';
    });
    
    html += '<h3>자격증</h3>';
    formData.certifications.forEach(cert => {
      html += '<p><strong>' + cert.name + '</strong> | ' + cert.issuer + ' | ' + cert.date + '</p>';
    });
    
    html += '<h3>추가 강점</h3><p>' + formData.additionalStrength.replace(/\n/g, '<br>') + '</p>';
    
    html += '<h3>작성 논문</h3>';
    formData.publications.forEach(pub => {
      html += '<p><strong>' + pub.title + '</strong><br>' + pub.journal + ' | ' + pub.date + ' | ' + pub.author + '</p>';
    });
    
    html += '<h2>주요 프로젝트</h2>';
    formData.projects.forEach((project, index) => {
      html += '<div style="margin:25px 0"><h3>프로젝트 ' + (index + 1) + ': ' + project.name + '</h3>';
      html += '<p><strong>회사:</strong> ' + project.company + ' | <strong>기간:</strong> ' + project.period + ' | <strong>역할:</strong> ' + project.role + '</p>';
      html += '<p><strong>배경:</strong><br>' + project.situation.replace(/\n/g, '<br>') + '</p>';
      html += '<p><strong>담당 업무:</strong><br>' + project.task.replace(/\n/g, '<br>') + '</p>';
      html += '<p><strong>수행 내용:</strong><br>' + project.action.replace(/\n/g, '<br>') + '</p>';
      html += '<p><strong>성과:</strong><br>' + project.result.replace(/\n/g, '<br>') + '</p>';
      html += '<p><strong>확보 역량:</strong><br>' + project.insight.replace(/\n/g, '<br>') + '</p></div>';
    });
    
    html += '<p style="text-align:center;margin-top:50px;color:#666">작성일: ' + new Date().toLocaleDateString('ko-KR') + '</p>';
    html += '</body></html>';

    const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '경력기술서_' + (formData.personalInfo.name || '미입력') + '_' + new Date().toISOString().split('T')[0] + '.doc';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">경력기술서 작성</h1>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-sm font-semibold text-gray-800 mb-2">작성 핵심 원칙</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>JD 기반 작성:</strong> 지원 직무의 JD 요구사항과 자신의 역량을 최대한 연결</li>
              <li>• <strong>최신순 작성:</strong> 경력, 프로젝트는 최근 것부터</li>
              <li>• <strong>구체적 기술:</strong> 역할, 규모, 수행 내용을 명확하게</li>
              <li>• <strong>숫자로 증명:</strong> 모든 성과는 구체적 수치로</li>
              <li>• <strong>역할 구분:</strong> 전체 성과와 본인 역할을 명확히 구분</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-indigo-600" />
            작성 핵심 원칙 - JD 기반 작성법
          </h2>
          
          <div className="bg-white p-4 md:p-6 rounded-lg mb-4">
            <h3 className="text-lg font-bold text-indigo-600 mb-3">📋 JD 분석 후 작성하기</h3>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>1단계:</strong> 지원 직무 JD에서 핵심 키워드 추출 (요구 기술, 경험, 역량)</p>
              <p><strong>2단계:</strong> 본인 경험 중 JD 키워드와 매칭되는 프로젝트/역량 선별</p>
              <p><strong>3단계:</strong> 매칭된 경험을 구체적 숫자와 성과로 작성</p>
              <p className="text-blue-700 font-semibold mt-3">💡 JD에 "대규모 트래픽 처리" 요구 → 본인의 "동시접속 20만명 처리" 경험 강조</p>
            </div>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-green-600 mb-3">✅ 좋은 표현 (구체적)</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>역할:</strong> 4명 팀 백엔드 리드 (본인 역할 명확)</li>
                  <li>• <strong>성과:</strong> 팀 전체 응답시간 30초→6초, 본인이 캐싱 시스템 설계 담당</li>
                  <li>• <strong>역량:</strong> Redis 캐싱 아키텍처 설계 및 성능 튜닝 역량 확보</li>
                  <li>• <strong>업무:</strong> 주니어 2명 멘토링 (주 2회 1:1), DB 쿼리 10개 최적화</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-600 mb-3">❌ 나쁜 표현 (애매함)</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 백엔드 개발 (역할 불명확, 팀 규모 없음)</li>
                  <li>• 시스템 성능 개선 (전체 성과인지 본인 기여인지 불명확)</li>
                  <li>• 개발 역량 향상 (무엇을 어떻게 확보했는지 불명확)</li>
                  <li>• 멘토링 참여 (횟수, 방법, 성과 불명확)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <User className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">인적사항</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">성명</label>
              <input type="text" value={formData.personalInfo.name} onChange={(e) => updatePersonalInfo('name', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">생년월일</label>
              <input type="text" value={formData.personalInfo.birth} onChange={(e) => updatePersonalInfo('birth', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="1990.01.01" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">연락처</label>
              <input type="text" value={formData.personalInfo.phone} onChange={(e) => updatePersonalInfo('phone', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="010-1234-5678" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">이메일</label>
              <input type="email" value={formData.personalInfo.email} onChange={(e) => updatePersonalInfo('email', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="example@email.com" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">주소</label>
              <input type="text" value={formData.personalInfo.address} onChange={(e) => updatePersonalInfo('address', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="서울시 강남구" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">지원 직무</label>
              <input type="text" value={formData.position} onChange={(e) => setFormData({...formData, position: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="백엔드 개발자" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">총 경력</label>
              <input type="text" value={formData.years} onChange={(e) => setFormData({...formData, years: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="7" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">학력사항</h2>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">학력 {index + 1}</h3>
                {formData.education.length > 1 && (
                  <button onClick={() => removeEducation(index)} className="text-red-600 hover:text-red-800 text-sm">삭제</button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">학교명</label>
                  <input type="text" value={edu.school} onChange={(e) => updateEducation(index, 'school', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="서울대학교" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">전공</label>
                  <input type="text" value={edu.major} onChange={(e) => updateEducation(index, 'major', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="컴퓨터공학과" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">학위</label>
                  <input type="text" value={edu.degree} onChange={(e) => updateEducation(index, 'degree', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="학사" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">재학 기간</label>
                  <input type="text" value={edu.period} onChange={(e) => updateEducation(index, 'period', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="2010.03 ~ 2014.02" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">상태</label>
                  <input type="text" value={edu.status} onChange={(e) => updateEducation(index, 'status', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="졸업 / 재학 / 수료" />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addEducation} className="w-full py-2 border-2 border-dashed border-indigo-300 text-indigo-600 rounded-lg hover:bg-indigo-50">+ 학력 추가</button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">핵심역량 요약</h2>
          </div>
          
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm font-semibold text-blue-800 mb-2">✅ 작성 가이드 - JD 기반 핵심역량 정리</p>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>작성 순서:</strong></p>
              <p>1. 지원 직무 JD의 핵심 요구사항 파악</p>
              <p>2. JD 요구사항과 매칭되는 본인의 경험/프로젝트 선별</p>
              <p>3. 선별한 경험을 구체적 숫자와 기간으로 표현</p>
              <p className="text-blue-700 font-semibold mt-2">💡 예시: JD에 "MSA 전환 경험" 요구 → "3년간 레거시 시스템 MSA 전환 3건 리드"</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">1줄 포지셔닝 (JD 핵심 키워드 포함)</label>
              <textarea value={formData.oneLineIntro} onChange={(e) => setFormData({...formData, oneLineIntro: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={2} placeholder="예: 7년차 대규모 트래픽 처리 전문 백엔드 개발자로 MSA 전환 3건 리드, 일 100만 건 이벤트 처리 시스템 설계 경험" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">핵심역량 1 (JD 요구사항과 매칭)</label>
              <textarea value={formData.competency1} onChange={(e) => setFormData({...formData, competency1: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예: 대규모 트래픽 처리 | 3년간 일 100만 건 이벤트 처리 시스템 운영&#10;• 동시접속 5만→20만 처리 시스템 설계&#10;• Redis 캐싱 도입으로 응답속도 70% 개선&#10;• AWS Auto Scaling 구성으로 비용 40% 절감" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">핵심역량 2 (JD 요구사항과 매칭)</label>
              <textarea value={formData.competency2} onChange={(e) => setFormData({...formData, competency2: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예: MSA 전환 경험 | 2년간 레거시 모놀리스 시스템 MSA 전환 3건&#10;• 주문 시스템 마이크로서비스 분리 (8개 서비스)&#10;• Docker/Kubernetes 기반 컨테이너 오케스트레이션 구축&#10;• API Gateway 패턴 적용으로 장애 격리 달성" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">핵심역량 3 (JD 요구사항과 매칭)</label>
              <textarea value={formData.competency3} onChange={(e) => setFormData({...formData, competency3: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예: 팀 리딩 및 기술 전파 | 4년간 3~5명 규모 팀 리드 경험&#10;• 주니어 개발자 5명 멘토링 (주 2회 1:1 코드 리뷰)&#10;• 사내 기술 세미나 12회 진행 (평균 참석 30명)&#10;• 기술 문서화로 온보딩 시간 2주→3일 단축" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">대표 성과 (가장 임팩트 있는 성과)</label>
              <textarea value={formData.majorProject} onChange={(e) => setFormData({...formData, majorProject: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예: 결제 시스템 성능 개선 프로젝트 리드&#10;• 4명 팀 백엔드 리드로 Redis 캐싱 아키텍처 설계&#10;• 응답시간 30초→6초 (80% 단축), 결제 성공률 92%→98% (6%p 향상)&#10;• 월 매출 손실액 5천만원→0원, 연간 6억원 손실 방지" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">핵심 기술 스택 (JD 요구 기술 우선 배치)</label>
              <textarea value={formData.techStack} onChange={(e) => setFormData({...formData, techStack: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예: Java, Spring Boot, Kotlin, Redis, MySQL, MongoDB, Kafka, RabbitMQ, AWS (EC2, RDS, S3, Lambda), Docker, Kubernetes, Jenkins, GitHub Actions" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">경력사항 (최신순)</h2>
          </div>
          
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm font-semibold text-blue-800 mb-2">✅ 작성 가이드 - 역할과 성과 명확히 구분</p>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>담당 역할 작성법:</strong></p>
              <p>• 팀 구성 (인원, 본인 포지션) 명시</p>
              <p>• 본인이 수행한 구체적 직무와 책임 범위 기술</p>
              <p>• 업무의 중요성과 난이도를 알 수 있도록 작성</p>
              <p className="text-red-700 font-semibold mt-2">⚠️ 주의: 팀 전체 성과 vs 본인 기여 명확히 구분</p>
              <p className="text-green-700">✅ 좋은 예: "팀 전체 매출 10억 달성, 본인은 결제 모듈 개발 담당"</p>
              <p className="text-red-700">❌ 나쁜 예: "매출 10억 달성" (본인이 전부 한 것처럼 오해)</p>
            </div>
          </div>
          
          {formData.careers.map((career, index) => (
            <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">경력 {index + 1}</h3>
                {formData.careers.length > 1 && (
                  <button onClick={() => removeCareer(index)} className="text-red-600 hover:text-red-800 text-sm">삭제</button>
                )}
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">회사명</label>
                    <input type="text" value={career.company} onChange={(e) => updateCareer(index, 'company', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="네이버" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">부서</label>
                    <input type="text" value={career.department} onChange={(e) => updateCareer(index, 'department', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="플랫폼개발팀" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">직급</label>
                    <input type="text" value={career.position} onChange={(e) => updateCareer(index, 'position', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="시니어 백엔드 개발자" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">재직 기간</label>
                    <input type="text" value={career.period} onChange={(e) => updateCareer(index, 'period', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="2020.03 ~ 2024.02" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked={career.isCurrentJob} onChange={(e) => updateCareer(index, 'isCurrentJob', e.target.checked)} className="w-4 h-4 text-indigo-600 rounded" />
                  <label className="text-sm font-semibold text-gray-700">현재 재직중</label>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">담당 역할 (팀 구성, 본인 포지션, 책임 범위)</label>
                  <textarea value={career.role} onChange={(e) => updateCareer(index, 'role', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={4} placeholder="예: 5명 규모 백엔드팀에서 시니어 개발자로 결제 시스템 전담&#10;• 결제 API 설계 및 개발 총괄&#10;• 주니어 개발자 2명 멘토링 (주 2회 1:1)&#10;• 시스템 장애 대응 및 모니터링 담당" />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addCareer} className="w-full py-2 border-2 border-dashed border-indigo-300 text-indigo-600 rounded-lg hover:bg-indigo-50">+ 경력 추가</button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">사용 가능 툴</h2>
          {formData.toolSkills.map((skill, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">툴 {index + 1}</h3>
                {formData.toolSkills.length > 1 && (
                  <button onClick={() => removeToolSkill(index)} className="text-red-600 hover:text-red-800 text-sm">삭제</button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">툴 이름</label>
                  <input type="text" value={skill.tools} onChange={(e) => updateToolSkill(index, 'tools', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="IntelliJ IDEA, VS Code, Git" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">숙련도</label>
                  <input type="text" value={skill.proficiency} onChange={(e) => updateToolSkill(index, 'proficiency', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="상 / 중 / 하" />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addToolSkill} className="w-full py-2 border-2 border-dashed border-indigo-300 text-indigo-600 rounded-lg hover:bg-indigo-50">+ 툴 추가</button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">사용 가능 언어</h2>
          {formData.languageSkills.map((skill, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">언어 {index + 1}</h3>
                {formData.languageSkills.length > 1 && (
                  <button onClick={() => removeLanguageSkill(index)} className="text-red-600 hover:text-red-800 text-sm">삭제</button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">언어 이름</label>
                  <input type="text" value={skill.languages} onChange={(e) => updateLanguageSkill(index, 'languages', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="한국어, 영어" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">숙련도</label>
                  <input type="text" value={skill.proficiency} onChange={(e) => updateLanguageSkill(index, 'proficiency', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="원어민 / 비즈니스 / 중급" />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addLanguageSkill} className="w-full py-2 border-2 border-dashed border-indigo-300 text-indigo-600 rounded-lg hover:bg-indigo-50">+ 언어 추가</button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">자격증</h2>
          {formData.certifications.map((cert, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">자격증 {index + 1}</h3>
                {formData.certifications.length > 1 && (
                  <button onClick={() => removeCertification(index)} className="text-red-600 hover:text-red-800 text-sm">삭제</button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">자격증명</label>
                  <input type="text" value={cert.name} onChange={(e) => updateCertification(index, 'name', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="정보처리기사" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">발급 기관</label>
                  <input type="text" value={cert.issuer} onChange={(e) => updateCertification(index, 'issuer', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="한국산업인력공단" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">취득일</label>
                  <input type="text" value={cert.date} onChange={(e) => updateCertification(index, 'date', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="2020.05" />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addCertification} className="w-full py-2 border-2 border-dashed border-indigo-300 text-indigo-600 rounded-lg hover:bg-indigo-50">+ 자격증 추가</button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">추가 강점</h2>
          <textarea value={formData.additionalStrength} onChange={(e) => setFormData({...formData, additionalStrength: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={4} placeholder="예: 기술 블로그 운영 (월 방문자 1만명), 오픈소스 기여 경험, 컨퍼런스 발표 3회" />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">주요 프로젝트 (최신순)</h2>
          
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm font-semibold text-blue-800 mb-2">✅ 작성 가이드 - 성과 구분 방법</p>
            <div className="text-sm text-gray-700 space-y-3">
              <div>
                <p className="font-semibold text-gray-800 mb-1">📌 성과 작성 3단계:</p>
                <p><strong>1단계:</strong> 프로젝트 전체 성과 먼저 기술</p>
                <p><strong>2단계:</strong> 본인의 구체적 담당 업무와 역할 명시</p>
                <p><strong>3단계:</strong> 본인 담당 영역에서의 성과 수치 제시</p>
              </div>
              
              <div className="mt-3 p-3 bg-green-50 rounded">
                <p className="font-semibold text-green-800 mb-2">✅ 좋은 예시 - 역할과 성과 명확히 구분</p>
                <p className="text-gray-700 leading-relaxed">
                  "프로젝트 전체적으로 시스템 응답시간을 30초에서 6초로 80% 개선하여 월 매출 손실액 5천만원을 제로화했습니다. 
                  본인은 4명 팀 중 백엔드 리드로 Redis 캐싱 시스템 설계를 전담하여 캐시 히트율 85%를 달성했고, 
                  이를 통해 DB 부하를 70% 감소시켜 전체 성과에 핵심적으로 기여했습니다."
                </p>
              </div>
              
              <div className="mt-2 p-3 bg-red-50 rounded">
                <p className="font-semibold text-red-800 mb-2">❌ 나쁜 예시 - 역할 불명확</p>
                <p className="text-gray-700">
                  "시스템 성능을 크게 개선하여 매출 손실을 방지했습니다."
                </p>
              </div>
            </div>
          </div>
          
          {formData.projects.map((project, index) => (
            <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">프로젝트 {index + 1}</h3>
                {formData.projects.length > 1 && (
                  <button onClick={() => removeProject(index)} className="text-red-600 hover:text-red-800 text-sm font-semibold">삭제</button>
                )}
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">회사명</label>
                    <input type="text" value={project.company} onChange={(e) => updateProject(index, 'company', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="네이버" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">프로젝트명</label>
                    <input type="text" value={project.name} onChange={(e) => updateProject(index, 'name', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="결제 시스템 성능 개선" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">프로젝트 기간</label>
                    <input type="text" value={project.period} onChange={(e) => updateProject(index, 'period', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="2023.01 ~ 2023.06 (6개월)" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">본인 역할</label>
                    <input type="text" value={project.role} onChange={(e) => updateProject(index, 'role', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="백엔드 리드 (4명 팀)" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">배경/문제</label>
                  <textarea value={project.situation} onChange={(e) => updateProject(index, 'situation', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="이벤트 기간 응답 30초, 고객 이탈 급증, 월 5천만원 손실" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">담당 업무</label>
                  <textarea value={project.task} onChange={(e) => updateProject(index, 'task', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="4명 팀 백엔드 리드, 성능 개선 전담, 주니어 멘토링" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">수행 내용</label>
                  <textarea value={project.action} onChange={(e) => updateProject(index, 'action', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={5} placeholder="1. Redis 캐싱 시스템 설계 및 구현&#10;2. DB 쿼리 최적화 10개 수행&#10;3. 모니터링 대시보드 구축&#10;4. 부하 테스트 수행" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">성과 (전체 성과 → 본인 역할 → 본인 기여 순서)</label>
                  <textarea value={project.result} onChange={(e) => updateProject(index, 'result', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={6} placeholder="예시:&#10;프로젝트 전체적으로 시스템 응답시간을 30초에서 6초로 80% 개선하여 결제 성공률을 92%에서 98%로 향상시켰습니다. 이를 통해 월 매출 손실액 5천만원을 제로화하고 연간 6억원의 손실을 방지했습니다.&#10;&#10;본인은 4명 팀 중 백엔드 리드로 Redis 캐싱 시스템 설계 및 구현을 전담했습니다. 구체적으로 LRU 캐싱 전략을 수립하고 TTL 정책을 최적화하여 캐시 히트율 85%를 달성했으며, 이를 통해 DB 조회 부하를 70% 감소시켜 전체 응답시간 개선에 핵심적으로 기여했습니다." />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">확보 역량 (구체적으로 습득한 기술/경험)</label>
                  <textarea value={project.insight} onChange={(e) => updateProject(index, 'insight', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={4} placeholder="예: &#10;• Redis 캐싱 전략 설계 역량 (LRU, TTL 정책 수립)&#10;• 대규모 트래픽 처리 아키텍처 설계 노하우&#10;• 성능 병목 지점 분석 및 튜닝 역량 (APM 도구 활용)&#10;• 주니어 개발자 기술 멘토링 역량 (코드 리뷰, 페어 프로그래밍)&#10;• 장애 대응 프로세스 수립 및 운영 경험" />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addProject} className="w-full py-3 border-2 border-dashed border-indigo-300 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50">+ 프로젝트 추가</button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">작성 논문</h2>
          {formData.publications.map((pub, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">논문 {index + 1}</h3>
                {formData.publications.length > 1 && (
                  <button onClick={() => removePublication(index)} className="text-red-600 hover:text-red-800 text-sm">삭제</button>
                )}
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">논문 제목</label>
                  <input type="text" value={pub.title} onChange={(e) => updatePublication(index, 'title', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="대규모 분산 시스템의 성능 최적화 기법 연구" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">게재지/학회</label>
                  <input type="text" value={pub.journal} onChange={(e) => updatePublication(index, 'journal', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="한국정보과학회 논문지 / KSC 2024" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">발표/게재일</label>
                    <input type="text" value={pub.date} onChange={(e) => updatePublication(index, 'date', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="2024.06" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">저자 (본인 위치 명시)</label>
                    <input type="text" value={pub.author} onChange={(e) => updatePublication(index, 'author', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="홍길동(제1저자), 김철수, 이영희" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button onClick={addPublication} className="w-full py-2 border-2 border-dashed border-indigo-300 text-indigo-600 rounded-lg hover:bg-indigo-50">+ 논문 추가</button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
            <p className="text-sm font-semibold text-blue-800 mb-3">📋 다운로드 전 최종 체크리스트</p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">✅ JD 연계성</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• 지원 직무 JD의 핵심 키워드가 경력기술서에 포함되어 있나요?</li>
                  <li>• JD 요구사항과 본인 경험이 명확히 매칭되나요?</li>
                </ul>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">✅ 구체성 검증</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• 모든 성과에 구체적인 숫자(%, 배수, 절대값)가 있나요?</li>
                  <li>• 역할 기술 시 팀 규모와 본인 포지션이 명시되어 있나요?</li>
                  <li>• 기간, 횟수, 규모 등이 구체적으로 표현되어 있나요?</li>
                </ul>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">✅ 역할 구분</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• 팀 전체 성과와 본인 기여가 명확히 구분되어 있나요?</li>
                  <li>• "우리가", "팀이"가 아닌 "본인이" 수행한 일이 명확한가요?</li>
                  <li>• 담당 직무의 중요성과 책임 범위가 드러나나요?</li>
                </ul>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">✅ 표현 검증</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• "참여", "수행", "기여" 같은 애매한 표현을 구체화했나요?</li>
                  <li>• "효율적", "적극적", "성실" 같은 추상적 표현이 없나요?</li>
                  <li>• Before → After 형태로 개선 정도가 명확한가요?</li>
                </ul>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">✅ 순서 정리</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• 경력, 프로젝트가 최신순으로 정렬되어 있나요?</li>
                  <li>• 지원 직무와 관련성 높은 내용이 우선 배치되어 있나요?</li>
                </ul>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">✅ 확보 역량</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• 각 프로젝트에서 습득한 구체적 기술/역량이 명시되어 있나요?</li>
                  <li>• 단순히 "역량 향상"이 아닌 구체적인 스킬이 표현되어 있나요?</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button onClick={generateWordDocument} className="py-4 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-bold rounded-lg hover:from-blue-700 hover:to-cyan-700 flex items-center gap-2">
              <Download className="w-6 h-6" />
              워드 파일 다운로드
            </button>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700 mb-2">
              <strong>📝 다운로드 후 활용 방법</strong>
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 생성된 워드파일을 활용하여 원하는 양식에 내용을 붙여서 완성하세요</li>
              <li>• 생성된 파일은 위에서 입력한 순서대로 출력됩니다</li>
              <li>• 최종 제출 시에는 지원하는 직무와 관련된 순서로, 최근 내용 순서로 정리해서 활용하세요</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerStatementGenerator;