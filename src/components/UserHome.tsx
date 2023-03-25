import '../styles/UserHome.scss';

const UserHome = () => {
    return (
        <>
            <section className='container my-5'>
                <form id='file-check'>
                    <div className='update mb-3'>
                        <input
                            className='form-control'
                            type='file'
                            name='file'
                            id='file-input'
                            placeholder='Arrastra y suelta el archivo'
                        />
                        <div className='placeholder'>
                            <p className='title m-1'>Arrastra y suelta el archivo</p>
                            <p className='mb-3'>Seleccionar Aquí</p>
                            <p>Tamaño máximo: 100 MB</p>
                        </div>
                    </div>
                </form>
            </section>
            <article className='py-5'>
                <div className='container'>
                    <form className='form-search' role='search'>
                        <div className='content'>
                            <svg
                                className='icon-search'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 512 512'>
                                <path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z' />
                            </svg>
                            <input
                                className='form-control input-search'
                                type='search'
                                placeholder='Buscar'
                                aria-label='Search'
                            />
                        </div>
                    </form>
                    <table className='table'>
                        <thead>
                            <tr className='table-header'>
                                <th scope='col'>#</th>
                                <th scope='col'>Titulo del registro</th>
                                <th scope='col'>Descripcion</th>
                                <th scope='col'>Certificados</th>
                                <th scope='col'>Fecha de carga</th>
                                <th scope='col'>Dueño</th>
                                <th scope='col'>Grupo</th>
                            </tr>
                        </thead>
                        <tbody id='documents'></tbody>
                    </table>
                    <div className='file-upload pt-2'>
                        <a href='./login.html'>
                            <button>Subir archivo</button>
                        </a>
                    </div>
                </div>
            </article>
        </>
    );
};

export default UserHome;
