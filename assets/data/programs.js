/* ============================================================
   GARUDA Academy Korea — 교육과정 소개 데이터 (/programs/)
   ------------------------------------------------------------
   /programs/ 페이지는 이 파일만 읽어 화면을 만듭니다.
   기간·시간·수강료·장비는 여기 적지 않습니다.
   ref 로 연결된 courses.js 값을 그대로 씁니다 (단일 원본).

   ▸ 새 과정 내용이 준비되면
     1. 해당 과정 항목을 찾아 ready 를 true 로 바꾼다
     2. lead(소개 제목) · intro(소개 문단) · curr(커리큘럼) ·
        values(분야별 핵심가치) · video(유튜브 ID) 를 채운다
     3. 사진 5장은 /assets/img/programs/<id>/1.webp ~ 5.webp 로 넣고
        photos 에 경로를 적는다. 비어 있으면 사진 영역이 숨겨진다
     ready:false 인 과정은 "소개 준비중"으로만 표시된다.

   ▸ 형식
     curr   : [{t:"그룹 제목", i:["세부 동작", ...]}, ...]
     values : [{role:"필라테스 강사 관점", quote:"한 줄 요약",
                body:["문단" 또는 "라벨: 내용", ...]}, ...]
     video  : https://youtu.be/XXXX 에서 XXXX 부분만
   ============================================================ */

window.GARUDA_PROGRAMS = {
  "kakao": "https://pf.kakao.com/_xexjbUT/chat",
  "categories": [
    {
      "key": "Mat",
      "kr": "매트",
      "courses": [
        "mat-foundation",
        "mat-seated-standing"
      ]
    },
    {
      "key": "Auxiliary",
      "kr": "소도구",
      "courses": [
        "barre-foundation",
        "barre-advanced",
        "chair-dhara",
        "brick-ghara",
        "chakra",
        "sling"
      ]
    },
    {
      "key": "Apparatus",
      "kr": "기구",
      "courses": [
        "reformer",
        "apparatus-a",
        "apparatus-b",
        "apparatus-series-a"
      ]
    }
  ],
  "programs": [
    {
      "id": "mat-foundation",
      "cat": "Mat",
      "name": "Mat Foundation",
      "kr": "매트 파운데이션",
      "ref": "mat-f",
      "ready": true,
      "lead": "Garuda Foundation Matwork",
      "intro": [
        "홀리스틱(Holistic), 오가닉(Organic), 다이내믹(Dynamic) – GARUDA는 우리의 운동 접근 방식을 혁신적으로 변화시키는 하이브리드입니다.",
        "Garuda Foundation Matwork 는 필라테스를 기반으로 한 시스템으로, 작은 관절과 근육 움직임 단위 (Micro)에서 큰 단위(Macro)의 복합관절과 근육의 점진적인 움직임으로 확장됩니다. 이 과정에서는 먼저 개별 근육과 관절을 분리해 움직임을 시작한 뒤, 그것이 속한 근막(myofascial) 라인으로 확장해 나갑니다.",
        "이 과정은 가루다의 철학과 해부학을 온전히 이해하는 관문이며, Foundation Matwork 는 우리의 메소드에서 가장 핵심이 되는 기초 과정입니다. 이를 통해 수련자는 더 발전된 Seated & Standing Courses으로 나아갈 수 있습니다."
      ],
      "notes": [],
      "curr": [
        {
          "t": "Part 1 - Supine",
          "i": [
            "Breathing and Prayer Arms",
            "Single Arm Reach",
            "Foot Work",
            "Leg Opening / Butterfly",
            "Arm and Leg Reach with Rotation",
            "Percussive Breath",
            "Successive Pelvic Tilts",
            "Pelvic Tilt Series",
            "Happy Maharaja",
            "TFL Stretch with Radial Arms"
          ]
        },
        {
          "t": "Part 2 - Abdominals",
          "i": [
            "Abdominal Series 1, 2 & 3",
            "Pelvic Tilt Series 2",
            "Obliques Series",
            "Pelvic Tilt Series 3"
          ]
        },
        {
          "t": "Part 3 - Seated",
          "i": [
            "Percussive Breath",
            "Hip Opener",
            "Twisting",
            "Foot work",
            "Clock Series",
            "Roll Over",
            "Stretch"
          ]
        },
        {
          "t": "Part 4 - On All Fours & Kneeling",
          "i": [
            "Kneeling Series 1 & 2",
            "Hand and Arm Series"
          ]
        },
        {
          "t": "Part 5 - Side & Upper Back Extension",
          "i": [
            "Oblique Roll",
            "Upper Back Extensions",
            "Gaining Trust Plank & Downward Dog",
            "Standing Forward Bend"
          ]
        }
      ],
      "values": [
        {
          "role": "필라테스 강사",
          "quote": "한계를 넘어서는 움직임의 확장",
          "body": [
            "기존 필라테스의 정교함에 근막(myofascial) 통합이라는 새로운 시각을 더합니다.",
            "차별화된 티칭: 단순한 근육 강화가 아닌, 전신을 유기적으로 연결하는 동작을 가르칠 수 있습니다.",
            "회원 만족도 향상: 단조로운 동작에 지루함을 느끼는 회원들에게 더욱 다양하고 역동적인 시퀀스를 제공하여 운동의 재미와 지속성을 높입니다.",
            "전문성 강화: 동작 지도뿐만 아니라 GARUDA의 깊은 철학을 전달하며, 경쟁 강사들 사이에서 독보적인 전문성을 확보합니다."
          ]
        },
        {
          "role": "요가 강사",
          "quote": "흐름에 힘과 안정성을 더하다",
          "body": [
            "요가의 흐름과 유연성에 정교한 근력과 안정성을 더해줍니다.",
            "안전하고 깊이 있는 수련: ’마이크로 움직임'을 통해 동작의 안정성을 확보하고, 회원들이 더욱 안전하게 수련에 집중하도록 돕습니다.",
            "운동 효과 극대화: 유연성 위주 수련에 근력 및 지구력 요소를 결합하여 회원들의 신체 기능을 더욱 균형 있게 발전시킵니다.",
            "가치의 확장: 요가의 철학과 GARUDA의 과학적 접근을 결합하여, 몸과 마음의 연결을 더욱 체계적으로 설명하고 전달합니다."
          ]
        },
        {
          "role": "물리치료사",
          "quote": "재활을 넘어선 기능 회복의 새로운 관점",
          "body": [
            "특정 부위 재활을 넘어선 '통합적이고 기능적인 움직임'을 가르칩니다.",
            "근본적인 원인 해결: 특정 근육이 아닌 근막(myofascial) 라인을 따라 몸 전체를 연결하는 방식으로 재활의 근본 원인을 해결하는 데 도움을 줍니다.",
            "안전한 기능 복귀: 작은 움직임부터 시작해 점진적으로 확장하는 GARUDA의 시스템은 환자의 상태에 맞는 안전한 재활을 가능하게 합니다.",
            "환자 교육의 도구: 환자에게 능동적으로 자신의 몸을 관리하고 기능적인 움직임을 되찾는 법을 교육하는 새로운 도구가 됩니다."
          ]
        }
      ],
      "closing": "GARUDA Mat 교육은 각 분야 전문가에게 기존의 한계를 뛰어넘는 새로운 통찰력과 스킬을 제공하며, 궁극적으로 고객들에게 더 높은 가치와 만족도를 선사할 것입니다.",
      "video": "zhOhNy32vpI",
      "reel": false,
      "photos": [
        {
          "src": "/assets/img/programs/mat-foundation/1.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/mat-foundation/2.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/mat-foundation/3.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/mat-foundation/4.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/mat-foundation/5.webp",
          "w": 1600,
          "h": 1067
        }
      ],
      "days": null,
      "hours": null,
      "pre": ""
    },
    {
      "id": "mat-seated-standing",
      "cat": "Mat",
      "name": "Seated & Standing",
      "kr": "좌식·입식 매트워크",
      "ref": "mat-ss",
      "ready": true,
      "lead": "",
      "intro": [
        "이 과정은 Seated & Standing 커리큘럼을 하나의 집중 프로그램으로 통합한 과정으로, 근력, 안정성, 균형, 관절 가동성 향상에 중점을 둡니다.",
        "동작들은 신체의 근막 라인(fascial lines) 을 따라 깊이 있게 작용하며, 몸을 회복시키고 활력을 되찾도록 돕습니다. 동시에 사지는 기능성 트레이닝을 통해 지속적으로 도전받으며, 복잡한 움직임 속에서 코어가 신체 프레임을 안정적으로 지지하도록 요구됩니다.",
        "### Garuda Seated & Standing Advanced",
        "Foundation 과정과 Seated & Standing 1 과정을 수료한 강사라면 누구나 이 교육법을 익히기 위해 얼마나 많은 노력과 헌신이 필요한지 잘 알고 있을 것입니다.",
        "이 과정은 이전 과정의 내용을 바탕으로 한 단계 더 발전하여, 새로운 동작과 개념을 통해 참가자에게 새로운 도전을 제공합니다. 익숙한 방식에 머무르지 않고 지속적으로 “틀 밖에서(outside the box)” 사고하고 움직이도록 하면서, 움직임의 기능성과 우아함을 함께 발전시키는 것을 목표로 합니다.",
        "우리는 스스로 사고할 수 있는 지적인 강사(intelligent teachers) 를 양성하는 것을 목표로 하며, 여러분의 성장을 위해 헌신하는 것을 자랑스럽게 생각합니다."
      ],
      "notes": [],
      "curr": [],
      "values": [],
      "closing": "",
      "video": "zhOhNy32vpI",
      "reel": false,
      "photos": [
        {
          "src": "/assets/img/programs/mat-seated-standing/1.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/mat-seated-standing/2.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/mat-seated-standing/3.webp",
          "w": 1067,
          "h": 1600
        },
        {
          "src": "/assets/img/programs/mat-seated-standing/4.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/mat-seated-standing/5.webp",
          "w": 1600,
          "h": 1067
        }
      ],
      "days": null,
      "hours": null,
      "pre": ""
    },
    {
      "id": "barre-foundation",
      "cat": "Auxiliary",
      "name": "Barre Foundation",
      "kr": "가루다 바 파운데이션",
      "ref": "aux-b",
      "ready": true,
      "lead": "Garuda Barre Foundation",
      "intro": [
        "GARUDA 바(Barre) 워크아웃은 춤의 에너지와 우아함을 그대로 담아낸 현대적인 움직임 프로그램입니다.",
        "리듬과 흐름이 수업의 중심을 이루며, 느린 아다지오부터 경쾌한 알레그로까지 다양한 속도의 변화를 통해 지루할 틈 없는 역동적인 경험을 제공합니다.",
        "균형과 근력이 조화를 이루면서 몸은 길고 유연하게 뻗어 나가고, 움직임은 한층 더 자유롭고 자연스러워집니다.",
        "또한 교정 단계에서부터 재활, 고급 난이도까지 폭넓게 확장되며, 다양한 강도의 밴드를 활용해 더욱 다채로운 동작을 경험할 수 있습니다.",
        "GARUDA Barre (가루다 바)는 단순한 운동을 넘어, 움직임 자체가 하나의 축제가 되는 특별한 수업입니다."
      ],
      "notes": [],
      "curr": [
        {
          "t": "Warm Up",
          "i": [
            "Parallel",
            "Turn out",
            "Parallel with slight bend of knees",
            "Plank position",
            "Port de bras",
            "Downward dog"
          ]
        },
        {
          "t": "Squats",
          "i": [
            "Squat Series 1",
            "Squat Series 2",
            "Squat Series 3"
          ]
        },
        {
          "t": "Legged Dog",
          "i": [
            "Downward dog 1, 2 & 3 Series"
          ]
        },
        {
          "t": "Plie",
          "i": [
            "Plie parallel",
            "Plie turnout",
            "Fourth position parallel",
            "Wide 2nd Position"
          ]
        },
        {
          "t": "Ballet Combo Series",
          "i": []
        },
        {
          "t": "Jumps Series",
          "i": []
        },
        {
          "t": "Stretch Series",
          "i": []
        },
        {
          "t": "Resistance Bands (Mala)",
          "i": [
            "Facing Barre",
            "Backing Barre",
            "Side Barre"
          ]
        }
      ],
      "values": [
        {
          "role": "필라테스 강사 관점",
          "quote": "필라테스의 정교함에 무용의 리듬을 더하다",
          "body": [
            "가루다 바는 코어 강화와 체형 교정에 탁월한 필라테스 원리에 춤의 흐름과 에너지를 결합한 프로그램입니다.",
            "리듬과 템포 변화 속에서 전신 근육이 균형 있게 활성화되며, 수업이 끝난 후에는 몸이 길게 뻗어 나가는 해방감을 경험할 수 있습니다.",
            "필라테스 지도자라면 회원들에게 보다 창의적이고 매력적인 수업 콘텐츠로 차별화된 가치를 제공할 수 있습니다."
          ]
        },
        {
          "role": "물리치료사 관점",
          "quote": "재활과 퍼포먼스, 그 경계를 잇는 움직임",
          "body": [
            "가루다 바는 근육을 국소적으로 활성화하는 데서 시작해 근막 라인을 따라 전신의 기능적 움직임으로 확장되는 체계적인 워크아웃입니다.",
            "재활 단계의 교정운동에서부터 고급 수준의 퍼포먼스까지 단계적으로 발전할 수 있어 환자 맞춤형 접근에 이상적입니다.",
            "균형, 협응, 근력, 유연성을 동시에 개선하여 치료 효과와 운동 효과를 자연스럽게 연결합니다."
          ]
        },
        {
          "role": "발레 강사 관점",
          "quote": "클래식 발레의 우아함을 새로운 방식으로 풀어내다",
          "body": [
            "가루다 바는 발레 바 훈련의 정수를 현대적으로 재해석한 프로그램으로, 아다지오의 선율 같은 흐름과 알레그로의 에너지 넘치는 활력을 동시에 담고 있습니다.",
            "학생들은 음악성과 표현력을 살리면서도 근력과 유연성을 고르게 발전시킬 수 있으며, 무대 위에서 요구되는 체력과 라인을 더욱 돋보이게 합니다.",
            "발레 수업 현장에 가루다 바를 도입하면 클래식 발레 훈련에 신선한 영감을 더해줄 수 있습니다."
          ]
        }
      ],
      "closing": "",
      "video": "xfijSmT7q4E",
      "reel": false,
      "photos": [
        {
          "src": "/assets/img/programs/barre-foundation/1.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/barre-foundation/2.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/barre-foundation/3.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/barre-foundation/4.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/barre-foundation/5.webp",
          "w": 1600,
          "h": 1067
        }
      ],
      "days": null,
      "hours": null,
      "pre": ""
    },
    {
      "id": "barre-advanced",
      "cat": "Auxiliary",
      "name": "Advanced Barre",
      "kr": "가루다 바 어드밴스드",
      "ref": null,
      "ready": true,
      "lead": "",
      "intro": [
        "이 교육과정은 Foundation Barre 코스를 이수한 분을 대상으로 진행됩니다.",
        "Foundation Barre 과정에서 학습한 각 파트별 동작들에서 좀더 다양한 움직임이 추가되어 완벽한 Movement Flow 가 형성됩니다. 이 과정에서 참가자들은 더 세심한 티칭 스킬과 움직임 기술을 숙지하게 되며 좀더 깊이 있는 GARUDA Method를 이해하게 됩니다.",
        "템포의 변화 즉, 안단테, 아다지오 등에 리듬과 함께 진행되는 Squat Series, Leg Dog Series Bllet combo 등은 우리의 움직임을 한단계 진화시킵니다.",
        "Port de bras, Pile 의 현대적 발레동작과 요가 Asana 의 결합은 GARUDA 만의 독창적인 Barre Movement 가 완성됩니다."
      ],
      "notes": [],
      "curr": [
        {
          "t": "Warm Up",
          "i": []
        },
        {
          "t": "Squat and lunges",
          "i": []
        },
        {
          "t": "Squat into the yoga combo",
          "i": []
        },
        {
          "t": "Legged Downward Dog",
          "i": []
        },
        {
          "t": "One Hand on Barr",
          "i": []
        },
        {
          "t": "Resistance Bands",
          "i": []
        }
      ],
      "values": [
        {
          "role": "필라테스 강사 관점",
          "quote": "필라테스의 정교함을 더 긴 움직임의 흐름으로 확장하다",
          "body": [
            "Advanced Barre는 파운데이션 과정에서 익힌 동작을 바탕으로 움직임을 더 길게 연결하고, 각 동작의 구성과 전환을 세밀하게 발전시키는 교육입니다.",
            "흐름이 길어지고 강도가 높아져도 신체 정렬과 움직임의 정확도를 유지하는 데 집중합니다. 지도자는 회원의 수준에 맞춰 동작의 난이도와 강도를 조절하며, 익숙한 바 동작을 더욱 풍부한 수업 콘텐츠로 발전시킬 수 있습니다."
          ]
        },
        {
          "role": "물리치료사 관점",
          "quote": "움직임의 정확도를 바탕으로 더 높은 운동 과제에 도전하다",
          "body": [
            "Advanced Barre는 파운데이션에서 익힌 기본 동작을 더 긴 흐름과 세분화된 과제로 확장하는 교육입니다.",
            "동작이 이어지고 운동 강도가 높아지는 동안에도 정렬, 균형, 협응을 유지하는 능력을 살펴보고 훈련할 수 있습니다. 물리치료사는 대상자의 수행 수준과 통증 반응에 따라 동작의 범위, 속도, 지속 시간, 강도를 조절해 운동 복귀 이후의 컨디셔닝에 활용할 수 있습니다."
          ]
        },
        {
          "role": "발레 강사 관점",
          "quote": "바에서 시작한 움직임을 더 긴 흐름과 정교한 표현으로 완성하다",
          "body": [
            "Advanced Barre는 파운데이션의 기본 바 동작을 더 긴 움직임의 흐름으로 연결하고, 동작의 방향과 전환, 리듬을 세밀하게 다듬는 교육입니다.",
            "길어진 흐름 속에서도 자세의 정확도와 움직임의 질을 유지하며, 높아진 난이도에 맞춰 근력과 지구력을 함께 훈련합니다. 발레 지도자는 이를 통해 바 수업의 구성을 다양화하고, 학생들이 안정적인 움직임 위에서 음악성과 표현력을 발전시키도록 지도할 수 있습니다."
          ]
        }
      ],
      "closing": "",
      "video": "",
      "reel": true,
      "photos": [
        {
          "src": "/assets/img/programs/barre-advanced/1.webp",
          "w": 1200,
          "h": 1600
        },
        {
          "src": "/assets/img/programs/barre-advanced/2.webp",
          "w": 1200,
          "h": 1600
        },
        {
          "src": "/assets/img/programs/barre-advanced/3.webp",
          "w": 1200,
          "h": 1600
        },
        {
          "src": "/assets/img/programs/barre-advanced/4.webp",
          "w": 360,
          "h": 480
        },
        {
          "src": "/assets/img/programs/barre-advanced/5.webp",
          "w": 1200,
          "h": 1600
        }
      ],
      "days": 6,
      "hours": 24,
      "pre": "Barre Foundation 과정 이수자 대상"
    },
    {
      "id": "chair-dhara",
      "cat": "Auxiliary",
      "name": "Chair (Dhara)",
      "kr": "다라 · 체어",
      "ref": "aux-d",
      "ready": true,
      "lead": "Garuda Chair (Dhara)",
      "intro": [
        "GARUDA Dhara (Chair) Course는 작은 스툴(의자)에 앉아서 모든 동작이 진행되며 이 프로그램은 원위부의 신체분절로부터 시작하여 신체 근위부의 각 신체관절에 대한 안정성과 가동성의 움직임을 효율적으로 증대시킬 수 있다.  또한 자율신경계에 균형을 회복시켜 스트레스, 우울증, 불면증, 만성피로, 근 통증, 면역력 증가, 소화장애 개선 등에 효과를 볼수 있다.",
        "누군가 서있기 어렵거나 편측성 마비, 신체불균형, 신체 부위별 통증이 있는 사람, 일상생활에 움직임이 거의 없는 사람, 임산부, 출산 후 운동프로그램, 운동초보자에게 매우 혁신적인 프로그램이다. 사지와 함께 척추의 움직임이 현저히 떨어지거나 약한분들에게 신체 가동범위의 증가를 부상 없이 안전하게제공할 수 있으며, 특별히 Core 기능의 향상이 필요한 분들에게 안전한 상태에서 운동을 지도할 수 있다.",
        "모든 동작과 동작은 하나의 흐름으로 연결 구성되어 있으며 당신의 운동목적에 따라 재활, 교정, 유연성, 근력증가 프로그램으로 독립화하여 수업을 진행할 수 있다. 또한 참가자들은 고유수용감각 기능이 향상되어 효율적인 움직임의 습득으로 인해 일상생활의 기능적인 움직임으로 전이될 수 있다.",
        "당신이 필라테스. 요가, 물리치료사 또는 피트니스 인스트락터로서 풍부한 레퍼토리의 움직임과 수업 구성 능력의 다양성을 원한다면 이 과정에 참가를 적극 추천합니다."
      ],
      "notes": [
        "도구는 작은 의자를 활용"
      ],
      "curr": [
        {
          "t": "Rooting yourself to the Floor",
          "i": [
            "어떻게 발바닥, 발목, 고관절, 골반, 척추에 움직임을 상호 연결하여 사용하는지?"
          ]
        },
        {
          "t": "Breathing and Centering the Body",
          "i": [
            "호흡과 함께 척추의 움직임 상호작용을 배우기"
          ]
        },
        {
          "t": "Curling & Arching",
          "i": [
            "Stool 에 앉아 발과 상호작용을 통해 흉추에 Twist, Side, Rotation 배우기"
          ]
        },
        {
          "t": "Consecutive Arch and Curl",
          "i": [
            "척추디스크에 공간을 확장하면서 흉추에 전반적인 움직임 익히기"
          ]
        },
        {
          "t": "Foot Work",
          "i": [
            "의자에 앉아 발가락부터 작은 분절을 시작하여 고관절 움직임까지 연결되는 10가지의 상호움직임"
          ]
        },
        {
          "t": "Utkatasana",
          "i": [
            "척추의 신장과 고관절의 Hip Hinge, 신체의 무게중심 이동을 근수축 패턴과 함께 익히기"
          ]
        },
        {
          "t": "Consecutive Arms Lift into a Prayer",
          "i": [
            "손가락부터 시작된 움직임은 흉추의 움직임과 협응을 조화롭게 이뤄낸다."
          ]
        },
        {
          "t": "Hip and Hamstring Opening",
          "i": [
            "힙과 고관절에 공간을 만들기 위해 힙 굴곡근과 신전근을 주요하게 늘려주기"
          ]
        },
        {
          "t": "Shoulder Circle with Arms",
          "i": [
            "손가락부터 시작된 움직임은 어깨뼈의 가동성을 확장하고 이것은 목, 어깨, 등근육에 긴장을 낮춘다."
          ]
        },
        {
          "t": "Warrior Stance Preparation",
          "i": [
            "요가 아사나에 동작을 적용하여 힙,고관절에 가동성을 증대시키기."
          ]
        },
        {
          "t": "Eagle Combination",
          "i": [
            "손가락, 손목, 팔꿈치, 어깨뼈는 등과 척추의 수축과 이완을 만들고 이것은 하나의 라인으로 귀결되어 최상에 척추 움직임을 만들어낸다."
          ]
        },
        {
          "t": "Porte de Bras Combo",
          "i": [
            "앉아서 마치 무용수처럼 상지 전체의 물결흐름을 만들어 낸다."
          ]
        },
        {
          "t": "Undulation",
          "i": [
            "내전근과 깊은 코어근육 그리고 호흡은 완벽한 척추움직임에 최대 가동성을 만들어 낸다."
          ]
        },
        {
          "t": "First Leg Combination",
          "i": [
            "전체론적인 GARUDA Dhara 의 시퀀스 도입단계로서 전신에 움직임을 하나의 라인으로 연결하는것과 최상에 신체정렬을 만들어낸다."
          ]
        },
        {
          "t": "Qi-Gong Warrior",
          "i": [
            "태극권의 움직임과 호흡법을 결합하여 상지의 최대 가동범위를 만들어낸다."
          ]
        },
        {
          "t": "Abdominals",
          "i": [
            "의자에 앉아 깊은 코어근육 수축과 이완를 강렬하게 만들어 낸다."
          ]
        },
        {
          "t": "Mega Combo",
          "i": [
            "전체론적인 GARUDA Dhara 의 시퀀스 귀결단계로서 전신에 움직임은 근막, 근육, 관절 사용을 극대화 시킨다."
          ]
        },
        {
          "t": "Balinese Arm",
          "i": [
            "손가락의 작은 움직임을 만들어내는 관절과 근육은 신경스트레치와 깊은 내재근의 움직임을 극대화시키며 목과 척추에 근신경을 촉진하여 Upper Back에 최상에 컨디션을 제공한다."
          ]
        },
        {
          "t": "Lymph Flow Massage, Breath Control and Meditation",
          "i": [
            "다양한 방식에 호흡법과 함께 림프라인을 마사지하며 신체의 온도를 유지하고 마음에 평정과 정신에 온화함를 불러일으키고 항진된 교감신경을 완화하여 자율신경계의 균형을 회복시킨다. 최종적으로 GARUDA Dhara 수업을 통해 자율신경계를 회복하여 불안,우울 정신건강 개선, 만성피로와 소화장애, 면역력 개선, 목,어깨, 등 통증 완화, 심혈관 위험 감소에 효과를 얻을 수 있다."
          ]
        }
      ],
      "values": [
        {
          "role": "요가 지도자 관점",
          "quote": "",
          "body": [
            "호흡과 신체 인지: 작은 의자 위에서 진행되는 동작들은 명상적이고 호흡과 연결되어 자율신경계 균형 회복에 도움.",
            "심신 안정: 스트레스, 우울, 불면 완화 효과가 있어 요가의 정신적 수련 목적과 잘 맞음.",
            "임산부·출산 후 프로그램으로 활용 가능 → 요가 수련의 치료적 접근을 확장할 수 있음."
          ]
        },
        {
          "role": "필라테스 지도자 관점",
          "quote": "",
          "body": [
            "Core 안정성 강화: 척추와 사지의 움직임을 안전하게 증진시키면서 코어 기능을 향상시킬 수 있음.",
            "재활·교정 목적 수업 구성: 움직임의 흐름을 통해 근력, 유연성, 교정 등 목표별 프로그램 세팅 가능.",
            "기존 리포머/매트 한계를 보완: 앉은 자세 기반이므로 기구 접근이 어려운 초보자나 신체 불균형이 있는 회원들에게 이상적."
          ]
        },
        {
          "role": "피트니스 트레이너 관점",
          "quote": "",
          "body": [
            "운동 초보자 맞춤: 일상에서 움직임이 적은 사람, 근육 약화된 사람에게 안전하게 가동범위를 넓혀줌.",
            "전신 근력·유연성 향상: 흐름 있는 프로그램을 통해 근력+유연성 동시 발달 가능.",
            "기능적 움직임 전이: 고유수용감각(Proprioception) 향상 → 일상생활이나 다른 운동종목(웨이트·유산소)에도 긍정적 효과."
          ]
        },
        {
          "role": "물리치료사 관점",
          "quote": "",
          "body": [
            "재활 및 치료 보조: 편측 마비, 통증, 신체 불균형 환자에게 안전하게 적용 가능.",
            "자율신경계 회복 효과: 만성피로, 통증 관리, 소화장애 개선 등 치료 후 회복 단계 환자에게 유용.",
            "관절 안정성과 가동성 균형 제공: 관절 제한이나 불안정성을 가진 환자에게 단계적 접근 가능."
          ]
        }
      ],
      "closing": "",
      "video": "-fOMIVKqqiM",
      "reel": false,
      "photos": [
        {
          "src": "/assets/img/programs/chair-dhara/1.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/chair-dhara/2.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/chair-dhara/3.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/chair-dhara/4.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/chair-dhara/5.webp",
          "w": 1600,
          "h": 1067
        }
      ],
      "days": null,
      "hours": null,
      "pre": ""
    },
    {
      "id": "brick-ghara",
      "cat": "Auxiliary",
      "name": "Brick (Ghara)",
      "kr": "그라하 · 브릭",
      "ref": "aux-g",
      "ready": true,
      "lead": "Garuda Brick (Ghara)",
      "intro": [
        "GARUDA Brick (Ghara) 프로그램은 필라테스의 원리와 시퀀스를 바탕으로 혁신적이고 기능적인 트레이닝을 제공합니다. 이를 통해 골반의 좌우 대칭과 안정성을 이끌어내고, 하체 근력과 기능성을 강화합니다.",
        "또한 상체를 집중적으로 다루며, 참가자의 체력을 단련하고 도전하게 하는 새로운 운동 세트를 포함하고 있습니다. 균형과 3차원적 움직임은 이 프로그램의 핵심 요소입니다.",
        "이 교육은 수업참가자가 기초부터 고급 단계에 이르기까지 탐구하고 경험하며 실제 현장에서 활용할 수 있는 새로운 영감을 제공합니다."
      ],
      "notes": [],
      "curr": [
        {
          "t": "Lying back, Hook Lying Position",
          "i": [
            "Leg Adductor pulse",
            "Side Tilts",
            "Side leans"
          ]
        },
        {
          "t": "Oblique Abdominal curl",
          "i": []
        },
        {
          "t": "Abdominal work creating traction",
          "i": [
            "Lengthening torso",
            "Lifting feet",
            "seesaw"
          ]
        },
        {
          "t": "First single foot pelvic tilt series",
          "i": [
            "Side Roll",
            "Hip lift",
            "Adductor work",
            "Combo",
            "Foundation repertoire"
          ]
        },
        {
          "t": "Lying on side series",
          "i": [
            "Hip and Leg lifts",
            "Whole Side lifts"
          ]
        },
        {
          "t": "Prone Position series",
          "i": [
            "Long Leg squeeze",
            "Knee squeeze",
            "Combo",
            "Preparation for Cobra series"
          ]
        },
        {
          "t": "Abdominal work",
          "i": [
            "curl, twist, side bend",
            "Combo work"
          ]
        },
        {
          "t": "Sitting Upright",
          "i": [
            "Arm push downs",
            "Pelvic Lift and changing legs",
            "Table top preparations"
          ]
        },
        {
          "t": "Kneeling on all 4s",
          "i": [
            "Arch and curl seres",
            "Downward dog series"
          ]
        },
        {
          "t": "Leaning forward Series",
          "i": [
            "Table Position Preparation",
            "Hamstring series"
          ]
        },
        {
          "t": "Table top series",
          "i": [
            "Arch and curl",
            "Mobilise hip and bend standing leg series"
          ]
        },
        {
          "t": "Standing Leg Series",
          "i": [
            "Single hip lifts",
            "Gluteus Series",
            "Arabesque taps"
          ]
        },
        {
          "t": "Mushroom top deep squats",
          "i": []
        },
        {
          "t": "Porte de bras with bricks",
          "i": [
            "wrist, elbow, shoulder works"
          ]
        },
        {
          "t": "Standing feet on either brick",
          "i": [
            "Hamstring stretch series"
          ]
        }
      ],
      "values": [
        {
          "role": "필라테스 강사 관점",
          "quote": "새로운 움직임의 확장, GARUDA Brick (Ghara)",
          "body": [
            "가루다 Brick (Ghara)는 필라테스 원리에 기반한 혁신적인 워크숍으로, 골반의 안정성과 하체의 균형을 정교하게 다듬어 줍니다. 상체를 강화하는 독창적인 운동까지 더해져, 기존의 필라테스 수업을 한층 업그레이드할 수 있습니다. 기초부터 고급 수준까지 다양한 회원에게 적용 가능한 레퍼토리를 직접 경험하고, 수업에 바로 활용할 수 있는 차별화된 콘텐츠를 가져가세요."
          ]
        },
        {
          "role": "물리치료사 관점",
          "quote": "재활과 기능 향상을 위한 새로운 접근",
          "body": [
            "이 교육은 골반의 좌우 대칭과 안정성을 회복시키고, 각 신체관절의 움직임에 정확한 정렬을 요구합니다. 따라서 상, 하체의 근력과 기능적 움직임을 강화하는 데 중점을 둡니다. 어깨 및 견관절, 고관절 움직임에 제한을 받고 있거나 내재근 강화가 필요한 환자, Crossed Chain 운동이 필요한 환자라면 더욱 더 추천해 드리는 프로그램입니다. 이러한 각 모듈화된 동작은 환자의 재활 프로그램에 즉시 적용할 수 있는 실질적인 도구가 됩니다. 기초 재활부터 고급 퍼포먼스까지 다양한 단계에 맞춘 운동법을 배워가세요."
          ]
        },
        {
          "role": "무용강사 관점",
          "quote": "움직임의 예술을 확장하는 가루다 그라하 워크숍",
          "body": [
            "무용수에게 필요한 것은 유연성만이 아닙니다. 골반의 안정성, 하체의 힘, 상체의 지지력까지 모두 조화롭게 발휘되어야 합니다. 가루다 그라하는 이러한 요소를 통합적으로 다루며, 균형과 3차원적 움직임을 통해 춤의 표현력을 극대화합니다. 창의적이고 도전적인 움직임을 통해 무용수의 신체적 잠재력을 끌어올리는 이 특별한 워크숍을 경험해 보세요."
          ]
        },
        {
          "role": "요가 강사 관점",
          "quote": "호흡과 움직임의 새로운 조화",
          "body": [
            "요가는 호흡과 의식, 움직임의 균형을 통해 신체와 마음을 연결합니다. GARUDA Brick은 이러한 요가의 철학과도 깊이 맞닿아 있습니다. 골반의 안정과 골반기저근, 깊은 코어근육, 하체의 근력을 기초로, 상체의 확장과 유연한 움직임을 통해 내적 중심을 강화합니다. 3차원적이고 유동적인 시퀀스는 요가 수련에 새로운 영감을 주며, 수업에 창의적으로 접목할 수 있는 풍부한 아이디어를 제공합니다."
          ]
        }
      ],
      "closing": "",
      "video": "g3SV9huFL_Y",
      "reel": false,
      "photos": [
        {
          "src": "/assets/img/programs/brick-ghara/1.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/brick-ghara/2.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/brick-ghara/3.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/brick-ghara/4.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/brick-ghara/5.webp",
          "w": 1600,
          "h": 1067
        }
      ],
      "days": null,
      "hours": null,
      "pre": ""
    },
    {
      "id": "chakra",
      "cat": "Auxiliary",
      "name": "Chakra",
      "kr": "차크라 · 폼롤러",
      "ref": "aux-c",
      "ready": true,
      "lead": "Garuda Chakra",
      "intro": [
        "차크라(Chakra) 저희가 새롭게 제작한 Foam roller 은 몸을 열고 늘리며 강화하는 운동 프로그램을 연결하는 핵심 개념입니다. ‘에너지 wheel’이라 불리는 이 도구는 신체적 힘과 정신적 집중을 동시에 자극하며, 참가자가 스스로를 도전하도록 돕습니다.",
        "창시자 James 선생님은 Garuda 운동법을 바탕으로, 참가자의 수준에 맞춰 동작을 쉽게 또는 고급 난이도로 수행할 수 있도록 체계적으로 설계했습니다. 차크라는 단순한 도구가 아니라, 신체적, 정신적, 영적 균형을 깨우는 ‘발견의 wheel’입니다.",
        "이 수업을 통해 근육과 근막스트레치는 물론, 전신의 릴렉싱까지 도달할 수 있는 폼놀러 사용의 확장영역으로 지도자의 영역은 확대됩니다."
      ],
      "notes": [],
      "curr": [
        {
          "t": "Opening our the Rib Cage and Secondary Respiratory Muscles",
          "i": [
            "Breathing",
            "Rocking Hips",
            "Scapula circles",
            "Reaching up and dropping arms",
            "Elbow circles"
          ]
        },
        {
          "t": "Tilting and Yawning Series",
          "i": [
            "Consecutive pelvic tilts",
            "Knee opens",
            "Arm circling and sliding leg long"
          ]
        },
        {
          "t": "Simple Balance",
          "i": [
            "Single leg balance series"
          ]
        },
        {
          "t": "Abdominal Series",
          "i": [
            "9가지 형태의 전체 복부 시리즈"
          ]
        },
        {
          "t": "Arm Series",
          "i": [
            "8가지의 시리즈"
          ]
        },
        {
          "t": "Psoas Stretch Series",
          "i": []
        },
        {
          "t": "Horizontal Series",
          "i": [
            "On Atlas - Axis Series",
            "On Bra Line Series",
            "On Sacrum Series",
            "On Hip Series"
          ]
        },
        {
          "t": "Sitting on Roller Series",
          "i": [
            "9가지의 시리즈"
          ]
        },
        {
          "t": "Perpendicular on your Front",
          "i": [
            "6가지의 시리즈"
          ]
        },
        {
          "t": "Upper Back Extension Series and Mermaids",
          "i": [
            "9가지의 시리즈"
          ]
        },
        {
          "t": "Splits Series",
          "i": []
        },
        {
          "t": "Sitting with Roller Behind Series",
          "i": []
        }
      ],
      "values": [
        {
          "role": "필라테스 강사 관점",
          "quote": "",
          "body": [
            "차크라(Chakra) 폼롤러는 필라테스 원리에 기반한 운동 프로그램과 연결되는 핵심 도구입니다. ‘에너지 휠’로 불리는 이 도구는 근력 강화, 코어 안정성, 유연성 향상과 정신적 집중을 동시에 자극하며, 참가자가 자신의 몸을 효과적으로 컨트롤하도록 돕습니다.",
            "제임스 선생님이 체계적으로 설계한 Garuda 운동법을 활용하면, 수련자의 수준에 맞춰 동작을 쉽게 또는 고급 난이도로 지도할 수 있습니다. 이를 통해 필라테스 지도자의 수업 영역과 지도 능력이 크게 확장됩니다."
          ]
        },
        {
          "role": "요가 강사 관점",
          "quote": "",
          "body": [
            "차크라(Chakra) 폼롤러는 요가의 스트레칭과 호흡, 아사나 수행을 보완하는 혁신적인 도구입니다. 에너지 휠로 불리는 폼롤러는 참가자의 균형감각과 신체 인식을 높이는 동시에, 정신적 집중과 내면적 안정까지 도모합니다.",
            "Garuda 운동법을 기반으로 제임스 선생님이 설계한 프로그램은 요가 동작의 난이도에 맞춰 조절 가능하며, 지도자는 참가자에게 깊이 있는 근육 이완과 전신 릴렉싱 경험을 제공할 수 있습니다."
          ]
        },
        {
          "role": "물리치료사(재활/운동치료) 관점",
          "quote": "",
          "body": [
            "차크라(Chakra) 폼롤러는 근막과 근육을 스트레칭하고, 신체 균형과 안정성을 회복하는 데 최적화된 도구입니다. ‘에너지 휠’로서 환자의 신체적 힘과 정신적 집중을 동시에 자극하며, 재활 운동의 기능적 효율을 높입니다.",
            "Garuda 운동법을 적용하면, 환자의 수준과 상태에 맞춰 운동 난이도를 조절할 수 있어 맞춤형 재활 프로그램 설계가 가능합니다. 이를 통해 물리치료사의 치료 영역과 기능 회복 프로그램이 한층 확장됩니다."
          ]
        }
      ],
      "closing": "",
      "video": "1p7dJXtilxk",
      "reel": false,
      "photos": [
        {
          "src": "/assets/img/programs/chakra/1.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/chakra/2.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/chakra/3.webp",
          "w": 1600,
          "h": 1066
        },
        {
          "src": "/assets/img/programs/chakra/4.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/chakra/5.webp",
          "w": 1600,
          "h": 1067
        }
      ],
      "days": null,
      "hours": null,
      "pre": ""
    },
    {
      "id": "sling",
      "cat": "Auxiliary",
      "name": "Sling (Tara)",
      "kr": "타라 · 슬링",
      "ref": "aux-t",
      "ready": true,
      "lead": "Garuda Sling(Tara)",
      "intro": [
        "Tara는 가루다의 가장 빛나는 별입니다.",
        "이 프로그램은 단순한 근력 강화 훈련을 넘어, 몸의 안정성과 균형을 길러주며 참가자에게 새로운 도전을 선사합니다.",
        "GARUDA Apparatus에 속해있는 한 장르로서 타라는 다채로운 방식으로 변형·응용할 수 있어 무궁무진한 가능성을 지니고 있습니다.",
        "Tara-Sling Belt는 우리를 지지하고 끌어주며, 주변 공간과의 교감을 통해 관절에 무리가 가지 않도록 움직임에 범위를 최상으로 이끌어냅니다. 이를 통해 우리는 자신이 가진 불안정성을 인식하고, 고유수용 감각과 신경가소성을 확장하여 더 강하고 자유로운 몸으로 나아가게 됩니다.",
        "Tara (Sling)는 단순한 도구가 아닌, 혁신적이고 도전적인 경험을 선물하는 동반자입니다.",
        "그래서 타라는 우리의 가장 빛나는 별이라 불립니다"
      ],
      "notes": [],
      "curr": [
        {
          "t": "Belt around waist",
          "i": [
            "Arch and Curl Series",
            "Side Bend",
            "Hip Circles"
          ]
        },
        {
          "t": "Small Marching",
          "i": [
            "Marching float leg",
            "Sprint Run"
          ]
        },
        {
          "t": "Hands on Stool or Box & Knee on the Floor",
          "i": [
            "Child’s pose, plank, forward extension",
            "Elbow plank Series",
            "Hip Circle"
          ]
        },
        {
          "t": "Cat Prep with Twist",
          "i": [
            "Downward dog, Plank"
          ]
        },
        {
          "t": "Downward Dog Sereis",
          "i": [
            "Moving into upward",
            "Small Push ups",
            "Undulation",
            "Hip Circles",
            "Kneeling One Foot",
            "Bend Knee and Elbow Series"
          ]
        },
        {
          "t": "Leg Forward and Curl Stretch",
          "i": [
            "Forward and Back",
            "Tai-Chi Stretch"
          ]
        },
        {
          "t": "Porte De Bras",
          "i": [
            "Single Arm Both Directions",
            "Double Arms Both Directions",
            "Kneeling Stretch"
          ]
        },
        {
          "t": "Pigeon on Mat",
          "i": [
            "Plain",
            "Sideways moving through leg"
          ]
        },
        {
          "t": "Leg Circle",
          "i": []
        },
        {
          "t": "Dolphin presses with hands on mat Series",
          "i": []
        },
        {
          "t": "Belt Series - sitting on Box",
          "i": [
            "Lay Back"
          ]
        },
        {
          "t": "Hand Behind head Series",
          "i": []
        },
        {
          "t": "Lying sideways - Side Mermaids",
          "i": [
            "Side mermaid and twist"
          ]
        },
        {
          "t": "Belt under sit bones",
          "i": [
            "Rocking side to side",
            "Pelvic tilt",
            "Circle and Reverse",
            "Wave Sereis",
            "Around Back Line Series",
            "Semi circle Porte de corp"
          ]
        },
        {
          "t": "Belt on side and Rib",
          "i": [
            "Rib Isolation",
            "Small side way"
          ]
        },
        {
          "t": "Knelling down sideways",
          "i": [
            "side stretch with twist series"
          ]
        },
        {
          "t": "Squatting Series",
          "i": [
            "Sit deep",
            "Small circles feet",
            "Small waves",
            "Rise on balls of feet, grand plie combo"
          ]
        },
        {
          "t": "Kneeling Down Series",
          "i": []
        },
        {
          "t": "Sitting down on mat series",
          "i": []
        },
        {
          "t": "Arch and Wheel Series",
          "i": [
            "Squat curve",
            "Squat into single arm wheel"
          ]
        },
        {
          "t": "Sitting down on mat, Butterly pose",
          "i": []
        }
      ],
      "values": [
        {
          "role": "필라테스 강사 관점",
          "quote": "",
          "body": [
            "타라는 필라테스 수업의 새로운 가능성을 여는 혁신적인 도구입니다.",
            "단순히 근육을 강화하는 것에서 나아가, 관절의 부담을 줄이고 움직임의 흐름을 확장하며 수련자에게 깊은 공간감을 경험하게 합니다.",
            "타라는 기존 리포머나 기구 수업에 신선한 도전을 더해, 강사에게는 더 다채로운 티칭 포인트를, 회원에게는 새로운 성취감을 선물합니다.",
            "필라테스 수업을 한 단계 업그레이드하고 싶다면, 타라가 그 해답입니다."
          ]
        },
        {
          "role": "물리치료사 관점",
          "quote": "",
          "body": [
            "타라는 재활과 기능 회복을 위한 최적의 파트너입니다.",
            "신체를 안정적으로 지지하면서도 필요한 방향으로 당겨주어, 환자가 안전하게 움직일 수 있는 환경을 제공합니다.",
            "이를 통해 근육의 불균형을 교정하고, 관절의 부담을 최소화하며, 환자 스스로 자신의 불안정성을 인식하고 개선할 수 있도록 돕습니다.",
            "타라는 단순한 운동 기구가 아닌, 치료와 회복을 함께하는 혁신적 보조 도구입니다."
          ]
        },
        {
          "role": "무용 강사 관점",
          "quote": "",
          "body": [
            "타라는 무용수들에게 새로운 표현의 언어를 열어주는 창조적 도구입니다.",
            "몸을 끌어주고 지지해주며, 더 길고 유연한 라인을 그려낼 수 있도록 이끌어줍니다.",
            "무용수는 타라를 통해 관절에 무리를 주지 않고도 더욱 자유롭고 도전적인 움직임을 탐구할 수 있습니다.",
            "무대 위에서의 자신감을 키우고, 몸의 한계를 넘어서는 경험을 가능하게 하는 타라,",
            "그 자체로 예술적 영감을 불러일으키는 가장 빛나는 별입니다."
          ]
        }
      ],
      "closing": "",
      "video": "D3cWYuxknHM",
      "reel": false,
      "photos": [
        {
          "src": "/assets/img/programs/sling/1.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/sling/2.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/sling/3.webp",
          "w": 360,
          "h": 480
        },
        {
          "src": "/assets/img/programs/sling/4.webp",
          "w": 1200,
          "h": 1600
        },
        {
          "src": "/assets/img/programs/sling/5.webp",
          "w": 360,
          "h": 480
        }
      ],
      "days": null,
      "hours": null,
      "pre": ""
    },
    {
      "id": "reformer",
      "cat": "Apparatus",
      "name": "Reformer",
      "kr": "가루다 리포머",
      "ref": "app-r",
      "ready": true,
      "lead": "",
      "intro": [
        "가루다는 리포머를 단순한 기구가 아닌 ‘움직임을 표현하는 도구’로 바라봅니다.",
        "이 과정은 근력, 지구력, 유연성, 협응력을 고루 자극하며 깊이 있는 수련을 가능하게 합니다.",
        "필라테스의 기본 원칙을 지키면서도, 가루다는 폭넓은 동작 레퍼토리를 통해 새로운 가능성을 제시합니다. 그 안에서 참가자는 자신감과 우아함을 발견하게 되지요.",
        "또한, 리포머를 현대적인 방식으로 재해석함으로써 전문가들에게는 더욱 도전적이고 영감을 주는 훈련 경험을 제공합니다."
      ],
      "notes": [],
      "curr": [
        {
          "t": "Seated on Reformer",
          "i": [
            "Feet Pushing and Pulling Series",
            "Arch and Curl Pelvic",
            "Arch and Curl Upper Back",
            "Rocking side to side",
            "Side Bend & Curl"
          ]
        },
        {
          "t": "Cat Series",
          "i": [
            "Plain Roll Down",
            "Shoulder shrugs & circle",
            "Arch and Curl",
            "Waves & Reverse",
            "Arabesque",
            "Knee circle & reverse knee circles",
            "Leg combo",
            "Single Arm",
            "Twisted Cat",
            "Split Variation 1. & 2.",
            "Split into Arch"
          ]
        },
        {
          "t": "Plank Variations",
          "i": [
            "Crow Series",
            "Forward Bend Variation for Handstand"
          ]
        },
        {
          "t": "Kneeling Warm ups",
          "i": [
            "Spirals & Chest Openings",
            "Wolfing"
          ]
        },
        {
          "t": "Kneeling Series",
          "i": [
            "Arch and Curl Series",
            "Bend and straighten elbows",
            "Shoulder Circles and Reverse",
            "Cat - Arch and Curl",
            "Waves & Reverse",
            "Combo in 6 counts",
            "Twist"
          ]
        },
        {
          "t": "Facing Sideways",
          "i": [
            "Open & Close Carriage",
            "Side Bend to Both Sides",
            "Twist to both sides whole series",
            "Undulation series",
            "Emmanuelle series",
            "Side Mermaid",
            "Kneeling side split series"
          ]
        },
        {
          "t": "Lunge",
          "i": [
            "Warm up for feet 1, & 2",
            "Leg kicks and Knee floats",
            "Front Lunges",
            "Hinge Lunge",
            "Waves and Reverse",
            "Twist",
            "Kneeling Back kick series",
            "Side Lunge series"
          ]
        },
        {
          "t": "Downward Dog Series",
          "i": [
            "Downward Dog whole Series",
            "Runners Downward Dog",
            "Stability Variations",
            "Hand to opposite ankle",
            "Downward Dog Combo",
            "Preparation for Handstands"
          ]
        },
        {
          "t": "Footwork Series",
          "i": [
            "Parallel feet series",
            "Dolphin Feet & Prancing",
            "Pelvic tilt series",
            "Second Postion series",
            "Single Leg Series whole Foot work",
            "Developpe - Enveloppe Series",
            "Ronde de Jambe en feet"
          ]
        },
        {
          "t": "Scooter Series",
          "i": [
            "Psoas Stretch Series",
            "Knee off Lunge Series",
            "with shoulder Rest"
          ]
        },
        {
          "t": "Single Foot in Strap",
          "i": [
            "Hamstring Pull",
            "Scissors & Cycling",
            "Leg circles",
            "Roll ups",
            "Corkscrew"
          ]
        },
        {
          "t": "Standing on one leg with Rotational disk",
          "i": [
            "fouette",
            "6 count sereis",
            "Facing back of Reformer Series",
            "Push Reverse fouetté",
            "Lunge with disc"
          ]
        },
        {
          "t": "Arm Series",
          "i": [
            "Twist Series",
            "Canoeing",
            "One Hand Swimming Combo",
            "Rowing with 2 Straps"
          ]
        },
        {
          "t": "Mermaid Series",
          "i": [
            "Mermaid Side, twist, 6 change hands series",
            "Full mermaid combo",
            "Circular mermaid with counter stretches"
          ]
        }
      ],
      "values": [
        {
          "role": "필라테스 강사 관점",
          "quote": "리포머, 새로운 가능성을 만나다",
          "body": [
            "가루다 리포머는 전통적인 필라테스 원리를 지키면서도, 훨씬 더 넓은 동작의 가능성을 열어줍니다. 풍부한 레퍼토리를 통해 회원들에게 지루하지 않은 수업 경험을 제공하며, 강사 자신도 새로운 지도 스킬을 확장할 수 있습니다.",
            "“당신의 필라테스 수업을 한 단계 업그레이드하세요.”"
          ]
        },
        {
          "role": "물리치료사 관점",
          "quote": "재활과 운동치료, 그 사이를 연결하다",
          "body": [
            "가루다 리포머 수업은 근력·지구력·유연성·협응력을 균형 있게 발달시켜 환자의 기능 회복을 돕습니다. 특히 근막 라인을 따라 움직임을 유도하기 때문에 신체 전체의 패턴 교정에 탁월하며, 재활 이후의 운동 지속성까지 보장합니다.",
            "“환자에게 더 안전하고, 더 효과적인 회복 솔루션을 제공하세요.”"
          ]
        },
        {
          "role": "무용 강사 관점",
          "quote": "움직임의 우아함을 기구로 완성하다",
          "body": [
            "이 교육은 단순한 근력 훈련이 아닌 ‘움직임의 예술’을 가능하게 합니다. 리듬과 플로우를 강조하며, 무용수의 신체를 더 길고 유연하게 만들어줍니다. 기구를 통해 보다 입체적이고 다이내믹한 움직임을 연습할 수 있어 공연 무대 위 자신감과 표현력을 극대화합니다.",
            "“무용수의 몸과 움직임을 예술의 차원으로 끌어올리세요.”"
          ]
        }
      ],
      "closing": "",
      "video": "lF696cVPMII",
      "reel": false,
      "photos": [
        {
          "src": "/assets/img/programs/reformer/1.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/reformer/2.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/reformer/3.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/reformer/4.webp",
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/assets/img/programs/reformer/5.webp",
          "w": 1600,
          "h": 1067
        }
      ],
      "days": null,
      "hours": null,
      "pre": ""
    },
    {
      "id": "apparatus-a",
      "cat": "Apparatus",
      "name": "Apparatus A",
      "kr": "아파라투스 A",
      "ref": "app-g",
      "ready": true,
      "lead": "Garuda Apparatus A. Foundation",
      "intro": [
        "이 과정은 기본적인 움직임 레퍼토리에 집중하며, 초급 및 중급 수준에서 움직임을 지도할 수 있도록 준비시키는 커리큘럼을 제공합니다.",
        "참가자는 여기서 GARUDA Mat Foundation 교육과정을 토대로 다시한번 GARUDA 철학과 움직임 원리를 좀더 심도 있게 배우고, GARUDA 고유의 티칭 기술을 습득하게 됩니다.",
        "Apparatus A는 특정 레퍼토리 요소에 집중하는 준비 단계이며, 이 파운데이션 커리큘럼은 아파라투스 B에서 완결됩니다.",
        "GARUDA Apparaus A와 B를 수료한 후, Garuda Apparatus Series 1 에서는 Box를 이용한 수업과 함께 스프링 및 스트랩 워크(strapwork)가 도입됩니다. 참가자는 롱 레버 암(long lever arm)과 복합적인 움직임 패턴에 도전하며, 이 모든시리즈는 운동학적이고 탄탄한 신체를 목표로 합니다."
      ],
      "notes": [],
      "curr": [
        {
          "t": "Platform Series",
          "i": [
            "Lunges Series",
            "Gluteus Series",
            "Reformer Foot Work",
            "Single Leg Series",
            "Lying on Side Series",
            "Feet in Straps",
            "Single Leg in Strap",
            "Single Leg Strap on Side",
            "Pushing and Pulling Abdominals",
            "Arms in Straps Abdominals",
            "Lying Arms in Straps",
            "Seated Arms in Straps",
            "Salome Series",
            "Single Arm Kneeling",
            "Kneeling Arms in Straps",
            "Plank Abdominals and Shoulder Stability"
          ]
        },
        {
          "t": "Split Platform Series",
          "i": [
            "Spinal Motion",
            "Warrior Variations",
            "Platform: Kneeling Side Stretch Split Carriage",
            "Kneeling Downward Facing Dog Variation",
            "Kneeling Series",
            "Surfing Series",
            "Serratus Series",
            "Mermaids Series"
          ]
        }
      ],
      "values": [
        {
          "role": "필라테스 강사 관점",
          "quote": "새로운 차원의 필라테스, 가루다 기구( Garuda Apparatus )",
          "body": [
            "Garuda Apparatus는 필라테스의 전통적인 원리에 무용의 유연함과 요가의 호흡법을 결합해 만들어진 차세대 기구 운동입니다.",
            "단순한 근력 훈련을 넘어, 전신의 균형·유연성·안정성을 동시에 훈련할 수 있도록 설계되어 있습니다.",
            "기존 리포머나 캐딜락 수업에 지루함을 느끼는 회원들에게 신선한 자극을 제공하며, 강사 입장에서도 폭넓은 시퀀스를 개발할 수 있는 새로운 도구가 됩니다."
          ]
        },
        {
          "role": "물리치료사 관점",
          "quote": "재활에서 퍼포먼스까지, 전 과정을 아우르는 기구",
          "body": [
            "Garuda Apparatus는 기초적인 근력 회복 단계부터 고강도의 스포츠 퍼포먼스까지 체계적으로 확장 가능한 프로그램을 제공합니다.",
            "스프링과 스트랩, 박스워크를 활용한 다양한 움직임은 관절 안정성과 근신경 협응을 강화하고, 장·단지간근의 균형을 개선합니다.",
            "따라서 재활 치료 이후 환자의 기능 회복, 체형 교정, 나아가 스포츠 선수의 퍼포먼스 향상까지 다룰 수 있는 다목적 솔루션이 됩니다."
          ]
        },
        {
          "role": "무용 강사 관점",
          "quote": "무용수의 몸을 위한 궁극의 트레이닝",
          "body": [
            "Garuda Apparatus는 단순한 근력 훈련이 아닌, 길고 유려한 움직임 속에서 힘과 흐름을 동시에 끌어내는 트레이닝입니다.",
            "특히 Long Lever Arm 동작과 복합적인 패턴은 무용수들에게 필요한 선(라인)과 중심 축의 안정성을 극대화합니다.",
            "발레, 현대무용, 댄스 등 어떤 장르에도 적용할 수 있으며, 공연 무대를 준비하는 무용수에게 이상적인 보조 훈련법으로 자리 잡고 있습니다."
          ]
        }
      ],
      "closing": "",
      "video": "INpvWhUYad8",
      "reel": false,
      "photos": [],
      "days": null,
      "hours": null,
      "pre": ""
    },
    {
      "id": "apparatus-b",
      "cat": "Apparatus",
      "name": "Apparatus B",
      "kr": "아파라투스 B",
      "ref": null,
      "ready": false,
      "lead": "",
      "intro": [],
      "notes": [],
      "curr": [],
      "values": [],
      "closing": "",
      "video": "",
      "reel": false,
      "photos": [],
      "days": null,
      "hours": null,
      "pre": ""
    },
    {
      "id": "apparatus-series-a",
      "cat": "Apparatus",
      "name": "Apparatus Series A",
      "kr": "아파라투스 시리즈 A",
      "ref": null,
      "ready": false,
      "lead": "",
      "intro": [],
      "notes": [],
      "curr": [],
      "values": [],
      "closing": "",
      "video": "",
      "reel": false,
      "photos": [],
      "days": null,
      "hours": null,
      "pre": ""
    }
  ]
};
