import React, { useState, ReactNode } from 'react';
import { Download, HelpCircle, ChevronDown, ChevronUp, FileText, User, Award, Briefcase } from 'lucide-react';

// 타입 정의
interface Project {
  name: string;
  period: string;
  role: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  insight: string;
}

interface FormData {
  name: string;
  position: string;
  years: string;
  oneLineIntro: string;
  competency1: string;
  competency2: string;
  competency3: string;
  majorProject: string;
  techStack: string;
  additionalStrength: string;
  projects: Project[];
}

interface ShowGuide {
  [key: string]: boolean;
}

interface GuideButtonProps {
  field: string;
  children: ReactNode;
}

const CareerStatementGenerator = () => {
  const [showGuide, setShowGuide] = useState<ShowGuide>({});
  const [formData, setFormData] = useState<FormData>({
    name: '',
    position: '',
    years: '',
    oneLineIntro: '',
    competency1: '',
    competency2: '',
    competency3: '',
    majorProject: '',
    techStack: '',
    additionalStrength: '',
    projects: [{
      name: '',
      period: '',
      role: '',
      situation: '',
      task: '',
      action: '',
      result: '',
      insight: ''
    }]
  });

  const toggleGuide = (fieldName: string) => {
    setShowGuide(prev => ({
      ...prev,
      [fieldName]: !prev[fieldName]
    }));
  };

  const GuideButton = ({ field, children }: GuideButtonProps) => (
    <button
      onClick={() => toggleGuide(field)}
      className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1 text-sm"
      type="button"
    >
      <HelpCircle className="w-4 h-4" />
      {children}
      {showGuide[field] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
    </button>
  );

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, {
        name: '', period: '', role: '', situation: '', task: '', action: '', result: '', insight: ''
      }]
    });
  };

  const updateProject = (index: number, field: keyof Project, value: string) => {
    const newProjects = [...formData.projects];
    newProjects[index][field] = value;
    setFormData({ ...formData, projects: newProjects });
  };

  const generateWordDocument = () => {
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: '맑은 고딕', 'Malgun Gothic', sans-serif; line-height: 1.8; padding: 40px; max-width: 800px; margin: 0 auto; }
    h1 { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 30px; font-size: 24pt; font-weight: bold; }
    h2 { margin-top: 30px; margin-bottom: 15px; font-size: 16pt; font-weight: bold; border-bottom: 1px solid #000; padding-bottom: 5px; }
    h3 { margin-top: 20px; margin-bottom: 10px; font-size: 13pt; font-weight: bold; }
    h4 { margin-top: 15px; margin-bottom: 8px; font-size: 11pt; font-weight: bold; }
    .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    .info-table td { padding: 8px; border: 1px solid #000; }
    .info-table td:first-child { font-weight: bold; width: 120px; }
    p { margin: 10px 0; text-align: justify; }
    .project-section { margin: 25px 0; page-break-inside: avoid; }
    .project-header { margin-bottom: 10px; padding-bottom: 5px; border-bottom: 1px solid #ccc; }
  </style>
</head>
<body>
  <h1>경력기술서</h1>
  <table class="info-table">
    <tr><td>성명</td><td>${formData.name}</td></tr>
    <tr><td>지원 직무</td><td>${formData.position}</td></tr>
    <tr><td>총 경력</td><td>${formData.years}년</td></tr>
  </table>
  <h2>핵심역량 요약</h2>
  <h3>나는 누구인가</h3>
  <p>${formData.oneLineIntro.replace(/\n/g, '<br>')}</p>
  <h3>핵심역량</h3>
  <p><strong>■ 역량 1</strong><br>${formData.competency1.replace(/\n/g, '<br>')}</p>
  <p><strong>■ 역량 2</strong><br>${formData.competency2.replace(/\n/g, '<br>')}</p>
  <p><strong>■ 역량 3</strong><br>${formData.competency3.replace(/\n/g, '<br>')}</p>
  <h3>대표 성과</h3>
  <p>${formData.majorProject.replace(/\n/g, '<br>')}</p>
  <h3>핵심 기술 스택</h3>
  <p>${formData.techStack.replace(/\n/g, '<br>')}</p>
  <h3>추가 강점</h3>
  <p>${formData.additionalStrength.replace(/\n/g, '<br>')}</p>
  <h2>주요 프로젝트 경험</h2>
  ${formData.projects.map((project, index) => `
    <div class="project-section">
      <div class="project-header">
        <h3>프로젝트 ${index + 1}: ${project.name}</h3>
        <p><strong>기간:</strong> ${project.period} &nbsp;&nbsp; <strong>역할:</strong> ${project.role}</p>
      </div>
      <h4>프로젝트 배경 및 문제 상황</h4>
      <p>${project.situation.replace(/\n/g, '<br>')}</p>
      <h4>담당 업무 및 책임</h4>
      <p>${project.task.replace(/\n/g, '<br>')}</p>
      <h4>수행 내용 (구체적 액션)</h4>
      <p>${project.action.replace(/\n/g, '<br>')}</p>
      <h4>성과 및 결과 (수치 필수)</h4>
      <p>${project.result.replace(/\n/g, '<br>')}</p>
      <h4>학습 및 인사이트</h4>
      <p>${project.insight.replace(/\n/g, '<br>')}</p>
    </div>
  `).join('')}
  <p style="text-align: center; margin-top: 50px; color: #666; border-top: 1px solid #ccc; padding-top: 20px;">작성일: ${new Date().toLocaleDateString('ko-KR')}</p>
</body>
</html>`;

    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `경력기술서_${formData.name || '미입력'}_${new Date().toISOString().split('T')[0]}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateDocument = () => {
    const content = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  경력기술서
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

성명: ${formData.name}
지원 직무: ${formData.position}
총 경력: ${formData.years}년

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  핵심역량 요약
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[나는 누구인가]
${formData.oneLineIntro}

[핵심역량]
■ ${formData.competency1}
■ ${formData.competency2}
■ ${formData.competency3}

[대표 성과]
${formData.majorProject}

[핵심 기술]
${formData.techStack}

[추가 강점]
${formData.additionalStrength}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  주요 프로젝트 경험
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.projects.map((project, index) => `
■ 프로젝트 ${index + 1}: ${project.name}

▸ 기간: ${project.period}
▸ 역할: ${project.role}

[프로젝트 배경 및 문제 상황]
${project.situation}

[담당 업무 및 책임]
${project.task}

[수행 내용 (구체적 액션)]
${project.action}

[성과 및 결과 (수치 필수)]
${project.result}

[학습 및 인사이트]
${project.insight}
`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  작성일: ${new Date().toLocaleDateString('ko-KR')}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `경력기술서_${formData.name || '미입력'}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">경력기술서 작성</h1>
          </div>
          <p className="text-gray-600">각 항목의 "가이드" 버튼을 클릭하면 작성 방법을 확인할 수 있습니다.</p>
        </div>

        {/* 기본 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <User className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-800">기본 정보</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">성명</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="홍길동"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">지원 직무</label>
              <input
                type="text"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="백엔드 개발자"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">총 경력 (년)</label>
              <input
                type="text"
                value={formData.years}
                onChange={(e) => setFormData({ ...formData, years: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="7"
              />
            </div>
          </div>
        </div>

        {/* 핵심역량 요약 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-800">핵심역량 요약</h2>
          </div>
          <div className="space-y-4">
            {/* 1줄 포지셔닝 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-gray-700">1줄 포지셔닝</label>
                <GuideButton field="oneLineIntro">가이드</GuideButton>
              </div>
              {showGuide.oneLineIntro && (
                <div className="mb-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                  <p className="text-sm font-semibold mb-2">📝 작성 공식</p>
                  <p className="text-sm text-gray-600 mb-3">[경력 연차] + [전문 분야] + [핵심 강점] + [지원 직무 키워드]</p>
                  <p className="text-sm font-semibold mb-2">✅ 좋은 예시</p>
                  <p className="text-sm text-gray-600 italic mb-2">
                    "7년차 대규모 트래픽 처리 전문 백엔드 개발자로, 레거시 시스템을 MSA로 전환하여 서비스 안정성을 높이는 데 강점 보유"
                  </p>
                  <p className="text-sm font-semibold mb-2">💡 작성 팁</p>
                  <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                    <li>지원 직무의 핵심 키워드 반드시 포함</li>
                    <li>구체적 숫자로 경력 명시</li>
                    <li>차별화 포인트 강조</li>
                  </ul>
                </div>
              )}
              <textarea
                value={formData.oneLineIntro}
                onChange={(e) => setFormData({ ...formData, oneLineIntro: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                rows={2}
                placeholder="7년차 대규모 트래픽 처리 전문 백엔드 개발자로, 레거시 시스템을 MSA로 전환하여 서비스 안정성을 높이는 데 강점 보유"
              />
            </div>

            {/* 핵심역량 1 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-gray-700">핵심역량 1</label>
                <GuideButton field="competency">가이드</GuideButton>
              </div>
              {showGuide.competency && (
                <div className="mb-3 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                  <p className="text-sm font-semibold mb-2">📝 작성 공식</p>
                  <p className="text-sm text-gray-600 mb-3">[역량명] | [구체적 경험] + [수치/기간]</p>
                  <p className="text-sm font-semibold mb-2">✅ 좋은 예시</p>
                  <p className="text-sm text-gray-600 italic">
                    대규모 트래픽 처리 | 일 100만 건 이상 처리 시스템 설계 및 구현 (3년)<br />- 동시 접속자 5만 → 20만 처리 가능 시스템으로 확장<br />- Redis 캐싱 전략으로 응답 속도 70% 개선
                  </p>
                  <p className="text-sm font-semibold mt-3 mb-2">⚠️ 피해야 할 것</p>
                  <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                    <li>"우수한", "뛰어난" 같은 형용사 금지</li>
                    <li>반드시 수치나 구체적 사례 포함</li>
                    <li>면접에서 3분 이상 설명 가능한 것만</li>
                  </ul>
                </div>
              )}
              <textarea
                value={formData.competency1}
                onChange={(e) => setFormData({ ...formData, competency1: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                rows={3}
                placeholder="대규모 트래픽 처리 | 일 100만 건 이상 처리 시스템 설계 및 구현 (3년)\n- 동시 접속자 5만 → 20만 처리 가능 시스템으로 확장\n- Redis 캐싱 전략으로 응답 속도 70% 개선"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">핵심역량 2</label>
              <textarea
                value={formData.competency2}
                onChange={(e) => setFormData({ ...formData, competency2: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                rows={3}
                placeholder="MSA 아키텍처 | 모놀리식 → MSA 전환 프로젝트 3건 리드\n- Spring Cloud 기반 마이크로서비스 8개 구축\n- 배포 시간 4시간 → 30분 단축"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">핵심역량 3</label>
              <textarea
                value={formData.competency3}
                onChange={(e) => setFormData({ ...formData, competency3: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                rows={3}
                placeholder="성능 최적화 | DB 쿼리 튜닝 및 시스템 병목 제거 전문\n- 복잡한 JOIN 쿼리를 인덱싱으로 10배 속도 향상\n- 메모리 사용량 40% 절감"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">대표 성과</label>
              <textarea
                value={formData.majorProject}
                onChange={(e) => setFormData({ ...formData, majorProject: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                rows={2}
                placeholder="쇼핑몰 주문 시스템 전면 개편 프로젝트 리드 (6개월, 팀 4명)\n→ 트래픽 5배 증가 대응, 결제 성공률 92% → 98% 향상"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">핵심 기술 스택</label>
              <textarea
                value={formData.techStack}
                onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                rows={2}
                placeholder="Java, Spring Boot, MySQL, Redis, Docker, Kubernetes, AWS(EC2/RDS/ElastiCache), Git, Jenkins"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">추가 강점</label>
              <textarea
                value={formData.additionalStrength}
                onChange={(e) => setFormData({ ...formData, additionalStrength: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                rows={3}
                placeholder="• 기술 블로그 운영 (월 조회수 5,000+, 구독자 1,200+)\n• AWS Certified Solutions Architect - Professional\n• 사내 기술 세미나 발표 5회"
              />
            </div>
          </div>
        </div>

        {/* 프로젝트 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-800">주요 프로젝트</h2>
            </div>
            <button
              onClick={addProject}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              + 프로젝트 추가
            </button>
          </div>

          {formData.projects.map((project, index) => (
            <div key={index} className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-indigo-600">
              <h3 className="text-lg font-bold text-gray-800 mb-4">프로젝트 {index + 1}</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">프로젝트명</label>
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) => updateProject(index, 'name', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="쇼핑몰 주문 시스템 개편"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">기간</label>
                    <input
                      type="text"
                      value={project.period}
                      onChange={(e) => updateProject(index, 'period', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="2023.03 ~ 2023.09 (6개월)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">역할</label>
                    <input
                      type="text"
                      value={project.role}
                      onChange={(e) => updateProject(index, 'role', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="백엔드 리드 개발자 (팀 4명 중 리더)"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-semibold text-gray-700">프로젝트 배경 및 문제 상황</label>
                    <GuideButton field={`project_situation_${index}`}>가이드</GuideButton>
                  </div>
                  {showGuide[`project_situation_${index}`] && (
                    <div className="mb-3 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                      <p className="text-sm font-semibold mb-2">💡 작성 가이드</p>
                      <p className="text-sm text-gray-600">
                        당시 상황, 해결해야 할 문제, 긴급도/중요도를 포함하여 작성하세요.
                      </p>
                    </div>
                  )}
                  <textarea
                    value={project.situation}
                    onChange={(e) => updateProject(index, 'situation', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    rows={3}
                    placeholder="기존 주문 시스템이 트래픽 증가로 응답 지연 발생. 특히 이벤트 기간 중 평균 응답시간 5초 → 30초로 증가하며 고객 불만 급증"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">담당 업무 및 책임</label>
                  <textarea
                    value={project.task}
                    onChange={(e) => updateProject(index, 'task', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    rows={3}
                    placeholder="주문 시스템 성능 개선 전담. 병목 지점 분석, 아키텍처 개선 방안 설계, 팀 리딩 및 일정 관리"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">수행 내용 (구체적 액션)</label>
                  <textarea
                    value={project.action}
                    onChange={(e) => updateProject(index, 'action', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    rows={5}
                    placeholder="1. Redis 캐싱 도입: 자주 조회되는 상품 정보 캐싱 (응답 속도 50% 개선)\n2. DB 쿼리 최적화: 복잡한 JOIN 쿼리 인덱스 추가 (30% 추가 개선)\n3. 읽기 전용 DB 분리: Master-Slave 구조 도입 (최종 80% 개선)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">성과 및 결과 (수치 필수)</label>
                  <textarea
                    value={project.result}
                    onChange={(e) => updateProject(index, 'result', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    rows={4}
                    placeholder="• 평균 응답 시간 30초 → 6초 단축 (80% 개선)\n• 결제 성공률 92% → 98% 향상\n• 이벤트 기간 동시 접속자 5만 → 20만 처리 가능\n• 고객 만족도 3.2 → 4.5 상승"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">학습 및 인사이트</label>
                  <textarea
                    value={project.insight}
                    onChange={(e) => updateProject(index, 'insight', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    rows={3}
                    placeholder="대규모 트래픽 처리를 위해서는 단순 코드 최적화보다 아키텍처 레벨의 접근이 중요함을 학습. 특히 캐싱 전략과 DB 분리가 핵심. 이후 다른 프로젝트에도 동일한 패턴 적용하여 성능 개선 달성"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 다운로드 버튼 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={generateDocument}
              className="py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-bold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download className="w-6 h-6" />
              텍스트 파일 (.txt)
            </button>
            <button
              onClick={generateWordDocument}
              className="py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-bold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download className="w-6 h-6" />
              워드 파일 (.docx)
            </button>
          </div>
          <p className="text-sm text-gray-600 text-center mt-4">워드 파일은 바로 편집 가능한 형식으로 다운로드됩니다</p>
        </div>
      </div>
    </div>
  );
};

export default CareerStatementGenerator;