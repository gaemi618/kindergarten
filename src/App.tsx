/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Shield, Star, Heart, Cloud, Zap, BookOpen } from 'lucide-react';
import React from 'react';

// --- Data Models ---

const powerRanks = [
  { rank: 'S급', rarity: '매우 희귀', power: '세계 멸망급', color: 'bg-red-100 text-red-600', borderColor: 'border-red-200' },
  { rank: 'A급', rarity: '조금 희귀', power: '자연재해급 (국가 위험)', color: 'bg-orange-100 text-orange-600', borderColor: 'border-orange-200' },
  { rank: 'B급', rarity: '조금 희귀', power: '도시 위험', color: 'bg-yellow-100 text-yellow-600', borderColor: 'border-yellow-200' },
  { rank: 'C급', rarity: '흔함', power: '마을 위험', color: 'bg-green-100 text-green-600', borderColor: 'border-green-200' },
  { rank: 'D급', rarity: '흔함', power: '큰 위험 없음', color: 'bg-blue-100 text-blue-600', borderColor: 'border-blue-200' },
  { rank: 'F급', rarity: '매우 흔함', power: '일반인 수준', color: 'bg-slate-100 text-slate-600', borderColor: 'border-slate-200' },
];

const teachers = [
  { 
    name: '심이현', 
    gender: '남', 
    age: '27살', 
    role: '꿈결반 담임교사', 
    rank: 'A급', 
    type: '정신 계열', 
    ability: '타인 감정 조종 및 생각 읽기', 
    imageColor: 'bg-indigo-100',
    icon: <Brain className="w-8 h-8 text-indigo-400" />,
    imageUrl: 'https://i.postimg.cc/nVW6qpcv/ihyeon-miso.png'
  },
  { 
    name: '민주언', 
    gender: '여', 
    age: '26살', 
    role: '별빛반 담임교사', 
    rank: 'C급', 
    type: '강화 계열', 
    ability: '감각 특화 (오감 예민)', 
    imageColor: 'bg-emerald-100',
    icon: <Eye className="w-8 h-8 text-emerald-400" />,
    imageUrl: 'https://i.postimg.cc/K8PwXT7z/jueon-miso.png'
  },
  { 
    name: '령호', 
    gender: '남', 
    age: '천년 이상', 
    role: '유치원장', 
    rank: 'S급', 
    type: '혼합 계열', 
    ability: '시공간 조종 + 호술(虎術)', 
    imageColor: 'bg-amber-100',
    icon: <Clock className="w-8 h-8 text-amber-500" />,
    imageUrl: 'https://i.postimg.cc/FH0598vd/lyeongho-miso.png'
  },
];

const students = [
  { 
    name: '원소망', 
    gender: '여', 
    age: '6살', 
    class: '꿈결반', 
    rank: 'S급', 
    type: '속성 계열', 
    ability: '원소 조종', 
    imageColor: 'bg-pink-100',
    icon: <Flame className="w-8 h-8 text-pink-400" />,
    imageUrl: 'https://i.postimg.cc/j5dG4j7n/somang-miso.png'
  },
  { 
    name: '지여준', 
    gender: '남', 
    age: '6살', 
    class: '별빛반', 
    rank: 'S급', 
    type: '속성 계열', 
    ability: '중력 조종', 
    imageColor: 'bg-blue-100',
    icon: <Cloud className="w-8 h-8 text-blue-400" />,
    imageUrl: 'https://i.postimg.cc/PJC90FKs/yeojun-miso.png'
  },
  { 
    name: '백화온', 
    gender: '남', 
    age: '5살', 
    class: '꿈결반', 
    rank: 'B급', 
    type: '특수 계열', 
    ability: '그림 구체화', 
    imageColor: 'bg-purple-100',
    icon: <Palette className="w-8 h-8 text-purple-400" />,
    imageUrl: 'https://i.postimg.cc/4ddShFD6/hwaon-miso.png'
  },
  { 
    name: '청초양', 
    gender: '여', 
    age: '5살', 
    class: '별빛반', 
    rank: 'A급', 
    type: '혼합 계열', 
    ability: '동식물 조종', 
    imageColor: 'bg-teal-100',
    icon: <Leaf className="w-8 h-8 text-teal-400" />,
    imageUrl: 'https://i.postimg.cc/43XMX3w0/choyang-miso.png'
  },
];

// Reusing lucide-react icons for avatars if images are not provided
import { Brain, Eye, Clock, Flame, Palette, Leaf, User } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfbfb] text-slate-800 selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden pb-24">
      
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0 flex justify-center object-cover opacity-60">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-yellow-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 pt-20">
        
        {/* Header / Hero Section */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center justify-center space-x-2 bg-white/60 backdrop-blur-md px-6 py-2 rounded-full shadow-sm text-pink-500 mb-6 border border-pink-100">
            <Sparkles size={18} />
            <span className="font-title text-lg tracking-wider">이능력자 전담 교육 기관</span>
            <Sparkles size={18} />
          </div>
          <h1 className="text-6xl md:text-7xl font-title text-slate-800 mb-6 drop-shadow-sm">
            <span className="text-pink-400">꿈</span><span className="text-blue-400">마법</span>유치원
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            특별한 아이들이 세상에 밝게 빛날 수 있도록 돕는 따뜻한 보금자리입니다.
          </p>
        </motion.header>

        {/* Worldview Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32 space-y-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-title text-slate-800 inline-block relative">
              세계관
              <div className="absolute -bottom-3 left-0 w-full h-2 bg-yellow-200 rounded-full opacity-60"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-2xl font-title text-slate-800 mb-4">이능력자와 히어로</h3>
              <p className="text-slate-600 leading-relaxed">
                먼 옛날부터 이능력을 가진 이들을 <strong>'이능력자'</strong>라 불렀고 그렇지 않은 이들을 <strong>'무능력자'</strong>라 불렀습니다. 
                자신의 능력을 남용하는 빌런들에 맞서 싸우는 히어로들이 하늘을 날아다니는 것이 정상인 이 세계에는, 
                특별한 능력을 가진 아이들이 세상에 잘 적응할 수 있게끔 돕는 유치원이 존재합니다.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-2xl font-title text-slate-800 mb-4">세계의 가치관</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✿</span>
                  무능력자에 대한 차별과 은근한 멸시가 존재합니다.
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✿</span>
                  D급 이하의 능력자는 무시당하지만, A급 이상은 큰 찬사를 받습니다.
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✿</span>
                  빌런과 범죄자에 대한 처벌이 매우 강력하며, 심할 경우 즉시 처형됩니다.
                </li>
              </ul>
            </div>
          </div>

          {/* Details on Abilities */}
          <div className="bg-gradient-to-br from-[#f8f9ff] to-[#fff5f8] rounded-[2.5rem] p-8 md:p-12 border border-white shadow-sm">
            <h3 className="text-2xl font-title text-slate-800 mb-8 flex items-center">
              <Zap className="text-yellow-400 mr-3" /> 이능력의 종류
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: '정신 계열', desc: '정신 조작 및 인지 간섭' },
                { name: '속성 계열', desc: '자연, 물질, 현상 조작' },
                { name: '강화 계열', desc: '인간 구조 유지 + 성능 강화' },
                { name: '변이 계열', desc: '인간 구조 변화 (비인간화)' },
                { name: '특수 계열', desc: '법칙 및 개념 조작' },
                { name: '혼합 계열', desc: '두 가지 이상의 능력 보유' },
              ].map((type) => (
                <div key={type.name} className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white hover:shadow-md transition-shadow">
                  <h4 className="font-title text-lg text-slate-700 mb-2">{type.name}</h4>
                  <p className="text-sm text-slate-600">{type.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-title text-slate-800 mb-6 flex items-center">
                <Star className="text-yellow-400 mr-3" /> 이능력 등급
              </h3>
              <div className="flex flex-wrap gap-4">
                {powerRanks.map((rank) => (
                  <div key={rank.rank} className={`flex-grow sm:flex-grow-0 basis-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1rem)] border-2 ${rank.borderColor} bg-white rounded-3xl p-5 hover:-translate-y-1 transition-transform`}>
                    <div className="flex justify-between items-start mb-3">
                      <span className={`font-title text-xl px-3 py-1 rounded-xl ${rank.color}`}>{rank.rank}</span>
                      <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">{rank.rarity}</span>
                    </div>
                    <p className="text-slate-600 text-sm mt-2 font-medium">{rank.power}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Teachers Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-title text-slate-800 inline-flex items-center relative">
              <BookOpen className="text-emerald-400 mr-3 w-8 h-8" />
              자랑스러운 선생님들
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teachers.map((teacher, i) => (
              <div key={teacher.name} className="group flex flex-col items-center text-center bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                
                {/* Photo Placeholder */}
                <div className={`w-32 h-32 rounded-full ${teacher.imageColor} flex items-center justify-center mb-6 shadow-inner ring-4 ring-white relative overflow-hidden group-hover:scale-105 transition-transform`}>
                  {teacher.imageUrl ? (
                    <img src={teacher.imageUrl} alt={teacher.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    teacher.icon
                  )}
                  {!teacher.imageUrl && (
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                      <span className="text-[10px] font-bold text-slate-600 bg-white/80 px-2 py-1 rounded-full">사진 공간</span>
                    </div>
                  )}
                </div>

                <div className="w-full">
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <h3 className="text-2xl font-title text-slate-800">{teacher.name}</h3>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">{teacher.gender} / {teacher.age}</span>
                  </div>
                  <p className="text-pink-500 font-medium mb-4">{teacher.role}</p>
                  
                  <div className="space-y-3 bg-slate-50 p-4 rounded-2xl w-full text-left">
                    <div className="flex justify-between items-center bg-white px-3 py-2 rounded-xl shadow-sm border border-slate-100">
                      <span className="text-xs text-slate-400">등급</span>
                      <span className={`font-title text-sm ${powerRanks.find(r => r.rank === teacher.rank)?.color} px-2 py-0.5 rounded-md`}>{teacher.rank}</span>
                    </div>
                    <div className="flex flex-col bg-white px-3 py-2 rounded-xl shadow-sm border border-slate-100">
                      <span className="text-xs text-slate-400 mb-1">능력 ({teacher.type})</span>
                      <span className="text-sm font-medium text-slate-700 leading-tight">{teacher.ability}</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </motion.section>

        {/* Students Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-title text-slate-800 inline-flex items-center relative">
              <User className="text-amber-400 mr-3 w-8 h-8" />
              사랑스러운 원생들
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {students.map((student, i) => (
              <div key={student.name} className="group bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-50 hover:border-pink-200 transition-colors">
                
                {/* Photo Placeholder */}
                <div className={`w-24 h-24 mx-auto rounded-[1.5rem] rotate-3 ${student.imageColor} flex items-center justify-center mb-5 group-hover:rotate-0 transition-transform duration-300 relative overflow-hidden`}>
                   {student.imageUrl ? (
                     <img src={student.imageUrl} alt={student.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   ) : (
                     student.icon
                   )}
                   {!student.imageUrl && (
                     <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-1">
                      <span className="text-[10px] font-bold text-slate-600 bg-white/80 px-2 flex py-0.5 rounded-full leading-none">사진 공간</span>
                    </div>
                   )}
                </div>

                <div className="text-center mb-4">
                  <div className="inline-block bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded-lg mb-2">
                    {student.class}
                  </div>
                  <h3 className="text-xl font-title text-slate-800 mb-1">{student.name}</h3>
                  <p className="text-xs text-slate-500">{student.gender} / {student.age}</p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">등급 / 계열</span>
                    <div className="flex gap-1 items-center">
                      <span className={`text-[10px] font-bold ${powerRanks.find(r => r.rank === student.rank)?.color} px-1.5 py-0.5 rounded`}>{student.rank}</span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{student.type}</span>
                    </div>
                  </div>
                   <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-center mt-2">
                      <span className="text-sm font-medium text-slate-700">{student.ability}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
