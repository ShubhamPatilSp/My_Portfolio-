"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import courseData from "../data/music.courses.json";

function Projects() {
    return (
        <div className="min-h-screen bg-black py-16 px-4 mt-[-305px]">

            <div className="flex flex-wrap justify-center gap-8">
                {courseData.courses.map((course) => (
                    <CardContainer
                        className="w-full sm:w-[30rem] lg:w-[25rem]"
                        key={course.id}
                    >
                        <CardBody
                            className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border"
                        >
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white mb-4"
                            >
                                {course.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm mb-6 dark:text-neutral-300 line-clamp-3"
                            >
                                {course.description}
                            </CardItem>
                            <CardItem
                                translateZ="100"
                                rotateX={20}
                                rotateZ={-10}
                                className="w-full mb-6"
                            >
                                <Image
                                    src={course.image}
                                    height={225}
                                    width={400}
                                    className="rounded-xl group-hover/card:shadow-xl w-full h-48 object-cover"
                                    alt={course.title}
                                />
                            </CardItem>
                            <div className="flex justify-end">
                                {course.link && (
                                    <Link
                                        href={course.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <CardItem
                                            translateZ={20}
                                            as="button"
                                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                        >
                                            See Me
                                        </CardItem>
                                    </Link>
                                )}
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
}

export default Projects;
