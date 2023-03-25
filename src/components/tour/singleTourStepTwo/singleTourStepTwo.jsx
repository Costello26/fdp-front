import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Steps, Button, Upload, Image, Modal } from "antd";
import { Link } from "react-router-dom";
import { UploadOutlined } from '@ant-design/icons';
import placeholderImg from '../../../assets/img/placeholder.png';
import { ModalInfo } from "./modalInfo";

export const SingleTourStepTwo = () => {
    const callSubmitlModal = () => Modal.confirm({ 
        title: 'Подтвердите корректность данных', 
        content: <ModalInfo/>, 
        cancelText: 'Вернуться', 
        okText: 'Подтверждаю', 
        okType: 'default'
    });
    const navigate = useNavigate();
    const [fileList, setFileList] = useState([
        {
          uid: '-1',
          name: 'image1.png',
          status: 'done',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmcR3KxKbfQWVqr_nX0iDBMbw63l6VRQdQHg&usqp=CAU',
        },
        {
          uid: '-2',
          name: 'image2.png',
          status: 'done',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmcR3KxKbfQWVqr_nX0iDBMbw63l6VRQdQHg&usqp=CAU',
        },
        {
          uid: '-5',
          name: 'image.png',
          status: 'uploading',
        },
    ]);

    const items = [
        {
            title: <Link to='/'>Дэшборд</Link>
        },
        {
            title: <Link to='/charters'>Туры</Link>
        },
        {
            title: 'Добавление тура'
        },
    ];

    const changeHandler = (info) => {
        //console.log(info);
        if(info.file.status === 'removed') {
            const sortedArr = fileList.filter((obj) => obj.status !== 'removed');
            setFileList(sortedArr);
        } else if(info.file.status === 'uploading' && !fileList.find(file => file.name === info.file.name)) {
            setFileList([...fileList, info.file]);
        } else { 
            return;
        }
    };

    return (
        <section className="single-tour w-full h-full">
        <Breadcrumb className="p-5 pb-3" items={items} separator="-"/>
            <h2 className="px-5 pb-2 text-xl font-semibold">Создание туристического пакета в системе - Шаг 2</h2>
            <Steps
                className="py-3"
                progressDot
                current={1}
                items={[
                    {
                    title: 'Ввод данных',
                    },
                    {
                    title: 'Загрузка медиа',
                    },
                    {
                    title: 'Публикация',
                    },
                ]}
            />
            <div className="w-full p-5">
                <div className="border rounded min-h-[100px] p-5">
                    <h3 className="heading font-semibold text-xl mb-1">Загрузка медиа</h3>
                    <div className="labels mb-3">
                        <span className="text-sm opacity-[.5] block">- Первое по списку фото будет установлено как главное фото обложки для тура;</span>
                        <span className="text-sm opacity-[.5] block">- Рекомендуется использовать изображение с разрешением до 1200х900 и размером до 100кб;</span>
                        <span className="text-sm opacity-[.5] block">- Внимательно перепроверьте загружаемый медиакониент перед загрузкой на платформу;</span>
                    </div>
                    <div className="upload-container flex">
                        <div className="images__upload w-1/2">
                            <Upload
                                onChange={(info) => changeHandler(info)}
                                accept="image/png, image/jpeg"
                                className="w-1/2"
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                fileList={fileList}
                                maxCount={3}
                            >
                            <Button icon={<UploadOutlined />}>Нажмите для загрузки</Button>
                            </Upload>
                        </div>
                        <div className="images__preview w-1/2 pl-3">
                            { 
                                fileList.map((img, i) => <Image
                                    key={i} 
                                    className="inline-block p-1"
                                    width={300} 
                                    height={200} 
                                    style={{objectFit: 'cover'}} 
                                    src={img.url || placeholderImg} 
                                    preview={!!img.url}
                                    alt={img.name}/>) 
                            }
                        </div>
                    </div>
                    <div className="basis-full">
                        <Button type="primary" className="my-2 mr-2 bg-blue-500" onClick={callSubmitlModal}>Продолжить</Button>
                        <Button type="default" className="my-2" danger={true} onClick={() => navigate('/tours/new')}>На шаг назад</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};