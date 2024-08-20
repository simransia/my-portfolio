exports.id = 83;
exports.ids = [83,609];
exports.modules = {

/***/ 2272:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2676);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7163);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emailjs_browser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3250);
/* harmony import */ var _models_Globe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3612);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__, _components__WEBPACK_IMPORTED_MODULE_5__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_4__, _components__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ContactForm = ()=>{
    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [start, setStart] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    const handleFocus = ()=>{
        setStart(true);
    };
    const handleBlur = ()=>{
        setStart(false);
    };
    console.log("service_m69hdip", "env");
    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);
        setStart(true);
        const serviceId = "service_m69hdip";
        const templateId = "template_cqxksu8";
        const publicId = "roS75YOMgjQnHoxty";
        if (!serviceId || !templateId || !publicId) {
            console.error("Missing email service configuration");
            return;
        }
        _emailjs_browser__WEBPACK_IMPORTED_MODULE_1___default().send(serviceId, templateId, {
            from_name: form.name,
            to_name: "Simran",
            from_email: form.email,
            to_email: "simransia07@gmail.com",
            message: form.message
        }, publicId).then(()=>{
            setLoading(false);
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success("Message sent successfuly! Thank you\uD83D\uDE03");
            setTimeout(()=>{
                setStart(false);
                setForm({
                    name: "",
                    email: "",
                    message: ""
                });
            }, 1000);
        }, (error)=>{
            setLoading(false);
            console.error(error);
            setStart(false);
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("I didn't receive your message \uD83D\uDE22. Please try again later");
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "relative text-white p-5 lg:w-10/12 mx-auto flex lg:flex-row flex-col max-container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-1 min-w-[50%] flex flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-xl p-5 my-4 font-bold md:text-4xl lg:text-6xl",
                        children: "Get in Touch"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        ref: formRef,
                        onSubmit: handleSubmit,
                        className: "w-full flex p-5 flex-col gap-7",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col gap-5 w-full",
                                children: [
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-black-500 font-semibold",
                                        children: "Your Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "name",
                                        className: "w-full rounded-md bg-gray-800 bg-opacity-90 px-4 py-2 outline-none",
                                        placeholder: "John",
                                        required: true,
                                        value: form.name,
                                        onChange: handleChange,
                                        onFocus: handleFocus,
                                        onBlur: handleBlur
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col gap-5 w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-black-500 font-semibold",
                                        children: "Your Email"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "email",
                                        name: "email",
                                        className: "w-full rounded-md bg-gray-800 bg-opacity-90 px-4 py-2 outline-none",
                                        placeholder: "John@gmail.com",
                                        required: true,
                                        value: form.email,
                                        onChange: handleChange,
                                        onFocus: handleFocus,
                                        onBlur: handleBlur
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col gap-5 w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-black-500 font-semibold",
                                        children: "Your Message"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        name: "message",
                                        rows: 4,
                                        className: "w-full rounded-md bg-gray-800 bg-opacity-90 px-4 py-2 outline-none",
                                        placeholder: "Write your thoughts here...",
                                        value: form.message,
                                        onChange: handleChange,
                                        onFocus: handleFocus,
                                        onBlur: handleBlur
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                disabled: loading,
                                className: "rounded-md mt-4 bg-gradient-to-r text-gray-600 font-semibold text-lg w-full mx-auto py-2 from-amber-200 to-amber-400",
                                onFocus: handleFocus,
                                onBlur: handleBlur,
                                children: loading ? "Sending..." : "Submit"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
                    children: [
                        " ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                            fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Loader */ .aN, {}),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ambientLight", {
                                    intensity: 5
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.OrbitControls, {
                                    enableZoom: false,
                                    enablePan: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_models_Globe__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    start: start
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4414:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export opacity */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2676);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: {
            duration: 4,
            delay: 1
        }
    }
};
const Loader = ()=>{
    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const words = [
        "Hello",
        "Namaste",
        "Hallo",
        "Bonjour",
        "Ol\xe1",
        "Hola",
        "Namaste"
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (index == words.length - 1) return;
        setTimeout(()=>{
            setIndex(index + 1);
        }, index == 0 ? 1000 : 150);
    }, [
        index
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.Html, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-[50vw] relative right-[50%]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.p, {
                    variants: opacity,
                    initial: "initial",
                    animate: "enter",
                    className: "text-white text-center w-full text-5xl font-bold",
                    children: [
                        "< ",
                        words[index],
                        " /> World!"
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "spinner"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2676);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3269);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const index = ({ currentStage })=>{
    if (currentStage === 1) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-gradient-to-r text-center rounded-md bg-opacity-20 p-4 from-[rgba(77,133,152,0.4)] to-[rgba(104,79,153,0.4)]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: "sm:text-xl mb-3 px-6 sm:leading-snug neo-brutalism-blue text-white mx-5",
                children: [
                    "Hi, this is",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold mx-2 text-white",
                        children: "Simran"
                    }),
                    "\uD83D\uDC4B",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "A Software Development Engineer",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    " from India"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/skills",
                className: "p-1 cursor-pointer px-2 rounded-md bg-gradient-to-r bg-opacity-40 bg-white shadow-md text-black font-semibold",
                children: "View skills snapshot"
            })
        ]
    });
    if (currentStage === 2) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-gradient-to-r rounded-md p-4 text-center bg-opacity-20 from-[rgba(148,152,77,0.4)] to-[rgba(47,158,25,0.4)]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "font-medium lg:text-xl mb-3",
                    children: "Through varied experiences, I've fostered a versatile skill set and developed an unwavering drive for continuous improvement and acquiring knowledge."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/work-experience",
                    className: "p-1 cursor-pointer px-2 rounded-md bg-gradient-to-r bg-opacity-40 bg-white shadow-md text-black font-semibold",
                    children: "Explore Career Timeline"
                })
            ]
        });
    }
    if (currentStage === 3) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-gradient-to-r p-4 text-center rounded-md bg-opacity-20 from-[rgba(63,86,135,0.4)] to-[rgba(50,182,182,0.4)]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "font-medium sm:text-xl mb-3",
                    children: "Engaged in a variety of personal projects to refine skills, foster growth, and cultivate expertise."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/projects",
                    className: "p-1 cursor-pointer px-2 rounded-md bg-gradient-to-r bg-opacity-40 bg-white shadow-md text-black font-semibold",
                    children: "Discover My Creations"
                })
            ]
        });
    }
    if (currentStage === 4) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-gradient-to-r p-4 text-center rounded-md bg-opacity-20 from-[rgba(152,77,128,0.4)] to-[rgba(158,120,25,0.4)]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "font-medium mb-3 sm:text-xl",
                    children: [
                        "Interested in discussing potential collaborations, or simply establishing a meaningful connection",
                        " "
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/contact",
                    className: "p-1 cursor-pointer px-2 rounded-md bg-gradient-to-r bg-opacity-40 bg-white shadow-md text-black font-semibold",
                    children: "Let's talk"
                })
            ]
        });
    }
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ 3250:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GI: () => (/* reexport safe */ _Popup__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   aN: () => (/* reexport safe */ _Loader__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   t: () => (/* reexport safe */ _ContactForm__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4414);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7021);
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2272);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Loader__WEBPACK_IMPORTED_MODULE_0__, _ContactForm__WEBPACK_IMPORTED_MODULE_2__]);
([_Loader__WEBPACK_IMPORTED_MODULE_0__, _ContactForm__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ models_Globe)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2676);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@react-three/drei"
var drei_ = __webpack_require__(4165);
;// CONCATENATED MODULE: ./src/assets/models/globe.glb
const globe_namespaceObject = __webpack_require__.p + "static/chunks/src/assets/models/globe.d7f3c9d4920dc690.glb";
// EXTERNAL MODULE: external "@react-three/fiber"
var fiber_ = __webpack_require__(3784);
;// CONCATENATED MODULE: ./src/models/Globe/index.tsx
/*
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/a-windy-day-fb78f4cc938144e6902dd5cff354d525
*/ 




const Globe = ({ start })=>{
    const globeRef = (0,external_react_.useRef)(null);
    const { nodes, materials, animations } = (0,drei_.useGLTF)(globe_namespaceObject);
    const { actions, names } = (0,drei_.useAnimations)(animations, globeRef);
    console.log(animations, actions, "here");
    (0,external_react_.useEffect)(()=>{
        if (actions[names[0]]) {
            actions[names[0]]?.reset().play();
        // actions[names[0]]?.duration = 2;
        }
    }, [
        animations,
        start
    ]);
    (0,fiber_.useFrame)(()=>{
        if (!globeRef.current) return;
        const rotationSpeed = 0.004; // Adjust the speed of rotation
        if (start) {
            globeRef.current.rotation.y += rotationSpeed;
        } else {
            globeRef.current.rotation.y = 0;
        }
    });
    return /*#__PURE__*/ jsx_runtime.jsx("group", {
        ref: globeRef,
        scale: [
            2,
            2,
            2
        ],
        dispose: null,
        children: /*#__PURE__*/ jsx_runtime.jsx("group", {
            name: "Sketchfab_Scene",
            children: /*#__PURE__*/ jsx_runtime.jsx("group", {
                name: "Sketchfab_model",
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                    name: "sketchfabtimeframe",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_2",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_49",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_4",
                                        geometry: nodes.Object_4.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_5",
                                        geometry: nodes.Object_5.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_6",
                                        geometry: nodes.Object_6.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_7",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_48",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_9",
                                        geometry: nodes.Object_9.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_10",
                                        geometry: nodes.Object_10.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_11",
                                        geometry: nodes.Object_11.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_12",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_47",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_14",
                                        geometry: nodes.Object_14.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_15",
                                        geometry: nodes.Object_15.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_16",
                                        geometry: nodes.Object_16.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_17",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_46",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_19",
                                        geometry: nodes.Object_19.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_20",
                                        geometry: nodes.Object_20.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_21",
                                        geometry: nodes.Object_21.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_22",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_45",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_24",
                                        geometry: nodes.Object_24.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_25",
                                        geometry: nodes.Object_25.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_26",
                                        geometry: nodes.Object_26.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_27",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_44",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_29",
                                        geometry: nodes.Object_29.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_30",
                                        geometry: nodes.Object_30.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_31",
                                        geometry: nodes.Object_31.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_32",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_43",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_34",
                                        geometry: nodes.Object_34.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_35",
                                        geometry: nodes.Object_35.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_36",
                                        geometry: nodes.Object_36.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_37",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_42",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_39",
                                        geometry: nodes.Object_39.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_40",
                                        geometry: nodes.Object_40.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_41",
                                        geometry: nodes.Object_41.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_42",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_41",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_44",
                                        geometry: nodes.Object_44.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_45",
                                        geometry: nodes.Object_45.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_46",
                                        geometry: nodes.Object_46.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_47",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_40",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_49",
                                        geometry: nodes.Object_49.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_50",
                                        geometry: nodes.Object_50.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_51",
                                        geometry: nodes.Object_51.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_52",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_39",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_54",
                                        geometry: nodes.Object_54.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_55",
                                        geometry: nodes.Object_55.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_56",
                                        geometry: nodes.Object_56.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_57",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_38",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_59",
                                        geometry: nodes.Object_59.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_60",
                                        geometry: nodes.Object_60.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_61",
                                        geometry: nodes.Object_61.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_62",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_37",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_64",
                                        geometry: nodes.Object_64.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_65",
                                        geometry: nodes.Object_65.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_66",
                                        geometry: nodes.Object_66.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_67",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_36",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_69",
                                        geometry: nodes.Object_69.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_70",
                                        geometry: nodes.Object_70.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_71",
                                        geometry: nodes.Object_71.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_72",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_35",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_74",
                                        geometry: nodes.Object_74.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_75",
                                        geometry: nodes.Object_75.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_76",
                                        geometry: nodes.Object_76.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_77",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_34",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_79",
                                        geometry: nodes.Object_79.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_80",
                                        geometry: nodes.Object_80.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_81",
                                        geometry: nodes.Object_81.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_82",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_33",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_84",
                                        geometry: nodes.Object_84.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_85",
                                        geometry: nodes.Object_85.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_86",
                                        geometry: nodes.Object_86.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_87",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_32",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_89",
                                        geometry: nodes.Object_89.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_90",
                                        geometry: nodes.Object_90.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_91",
                                        geometry: nodes.Object_91.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_92",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_31",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_94",
                                        geometry: nodes.Object_94.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_95",
                                        geometry: nodes.Object_95.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_96",
                                        geometry: nodes.Object_96.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_97",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_99",
                                        geometry: nodes.Object_99.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_100",
                                        geometry: nodes.Object_100.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_101",
                                        geometry: nodes.Object_101.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_102",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_29",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_104",
                                        geometry: nodes.Object_104.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_105",
                                        geometry: nodes.Object_105.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_106",
                                        geometry: nodes.Object_106.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_107",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_28",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_109",
                                        geometry: nodes.Object_109.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_110",
                                        geometry: nodes.Object_110.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_111",
                                        geometry: nodes.Object_111.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_112",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_27",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_114",
                                        geometry: nodes.Object_114.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_115",
                                        geometry: nodes.Object_115.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_116",
                                        geometry: nodes.Object_116.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_117",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_26",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_119",
                                        geometry: nodes.Object_119.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_120",
                                        geometry: nodes.Object_120.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_121",
                                        geometry: nodes.Object_121.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_122",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_25",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_124",
                                        geometry: nodes.Object_124.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_125",
                                        geometry: nodes.Object_125.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_126",
                                        geometry: nodes.Object_126.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_127",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_24",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_129",
                                        geometry: nodes.Object_129.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_130",
                                        geometry: nodes.Object_130.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_131",
                                        geometry: nodes.Object_131.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_132",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_23",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_134",
                                        geometry: nodes.Object_134.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_135",
                                        geometry: nodes.Object_135.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_136",
                                        geometry: nodes.Object_136.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_137",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_22",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_139",
                                        geometry: nodes.Object_139.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_140",
                                        geometry: nodes.Object_140.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_141",
                                        geometry: nodes.Object_141.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_142",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_21",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_144",
                                        geometry: nodes.Object_144.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_145",
                                        geometry: nodes.Object_145.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_146",
                                        geometry: nodes.Object_146.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_147",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_20",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_149",
                                        geometry: nodes.Object_149.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_150",
                                        geometry: nodes.Object_150.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_151",
                                        geometry: nodes.Object_151.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_152",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_19",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_154",
                                        geometry: nodes.Object_154.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_155",
                                        geometry: nodes.Object_155.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_156",
                                        geometry: nodes.Object_156.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_157",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_18",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_159",
                                        geometry: nodes.Object_159.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_160",
                                        geometry: nodes.Object_160.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_161",
                                        geometry: nodes.Object_161.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_162",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_17",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_164",
                                        geometry: nodes.Object_164.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_165",
                                        geometry: nodes.Object_165.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_166",
                                        geometry: nodes.Object_166.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_167",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_16",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_169",
                                        geometry: nodes.Object_169.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_170",
                                        geometry: nodes.Object_170.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_171",
                                        geometry: nodes.Object_171.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_172",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_15",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_174",
                                        geometry: nodes.Object_174.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_175",
                                        geometry: nodes.Object_175.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_176",
                                        geometry: nodes.Object_176.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_177",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_14",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_179",
                                        geometry: nodes.Object_179.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_180",
                                        geometry: nodes.Object_180.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_181",
                                        geometry: nodes.Object_181.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_182",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_13",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_184",
                                        geometry: nodes.Object_184.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_185",
                                        geometry: nodes.Object_185.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_186",
                                        geometry: nodes.Object_186.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_187",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_189",
                                        geometry: nodes.Object_189.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_190",
                                        geometry: nodes.Object_190.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_191",
                                        geometry: nodes.Object_191.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_192",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_11",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_194",
                                        geometry: nodes.Object_194.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_195",
                                        geometry: nodes.Object_195.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_196",
                                        geometry: nodes.Object_196.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_197",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_199",
                                        geometry: nodes.Object_199.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_200",
                                        geometry: nodes.Object_200.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_201",
                                        geometry: nodes.Object_201.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_202",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_9",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_204",
                                        geometry: nodes.Object_204.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_205",
                                        geometry: nodes.Object_205.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_206",
                                        geometry: nodes.Object_206.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_207",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_209",
                                        geometry: nodes.Object_209.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_210",
                                        geometry: nodes.Object_210.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_211",
                                        geometry: nodes.Object_211.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_212",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_7",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_214",
                                        geometry: nodes.Object_214.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_215",
                                        geometry: nodes.Object_215.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_216",
                                        geometry: nodes.Object_216.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_217",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_219",
                                        geometry: nodes.Object_219.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_220",
                                        geometry: nodes.Object_220.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_221",
                                        geometry: nodes.Object_221.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_222",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_224",
                                        geometry: nodes.Object_224.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_225",
                                        geometry: nodes.Object_225.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_226",
                                        geometry: nodes.Object_226.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_227",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_229",
                                        geometry: nodes.Object_229.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_230",
                                        geometry: nodes.Object_230.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_231",
                                        geometry: nodes.Object_231.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_232",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_234",
                                        geometry: nodes.Object_234.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_235",
                                        geometry: nodes.Object_235.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_236",
                                        geometry: nodes.Object_236.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_237",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_239",
                                        geometry: nodes.Object_239.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_240",
                                        geometry: nodes.Object_240.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_241",
                                        geometry: nodes.Object_241.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_242",
                            scale: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_244",
                                        geometry: nodes.Object_244.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_245",
                                        geometry: nodes.Object_245.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_246",
                                        geometry: nodes.Object_246.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("group", {
                            name: "Object_247",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("group", {
                                name: "frame_0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_249",
                                        geometry: nodes.Object_249.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_250",
                                        geometry: nodes.Object_250.geometry,
                                        material: materials["Scene_-_Root"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("points", {
                                        name: "Object_251",
                                        geometry: nodes.Object_251.geometry,
                                        material: materials["Scene_-_Root"]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const models_Globe = (Globe);


/***/ }),

/***/ 7609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2676);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6540);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5697);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);
react_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6540:
/***/ (() => {



/***/ })

};
;