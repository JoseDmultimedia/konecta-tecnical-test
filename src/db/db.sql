-- public.empleado definition

-- Drop table

-- DROP TABLE public.empleado;

CREATE TABLE public.empleado (
	id int4 NOT NULL,
	fecha_ingreso date NULL,
	nombre varchar(50) NULL,
	salario numeric NULL,
	CONSTRAINT empleado_pkey PRIMARY KEY (id)
);


-- public.solicitud definition

-- Drop table

-- DROP TABLE public.solicitud;

CREATE TABLE public.solicitud (
	id int4 NOT NULL,
	codigo varchar(50) NOT NULL,
	descripcion varchar(50) NOT NULL,
	resumen varchar(50) NOT NULL,
	id_empleado int4 NOT NULL,
	CONSTRAINT solicitud_pk PRIMARY KEY (id),
	CONSTRAINT solicitud_empleado_fk FOREIGN KEY (id_empleado) REFERENCES public.empleado(id)
);