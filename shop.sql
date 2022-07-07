--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

-- Started on 2022-07-07 01:15:16

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE shop;
--
-- TOC entry 3334 (class 1262 OID 24576)
-- Name: shop; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE shop WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Mexico.1252';


ALTER DATABASE shop OWNER TO postgres;

\connect shop

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 211 (class 1259 OID 24592)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id uuid NOT NULL,
    name character varying(30) NOT NULL,
    description character varying(100) NOT NULL,
    price integer NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 24577)
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id uuid NOT NULL,
    name character varying(30) NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 24597)
-- Name: sales; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sales (
    id uuid NOT NULL,
    quantity integer NOT NULL,
    sale_at timestamp with time zone,
    product_id uuid NOT NULL,
    user_id uuid NOT NULL
);


ALTER TABLE public.sales OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 24582)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid NOT NULL,
    document character varying(20) NOT NULL,
    name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    roles_id uuid NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 3327 (class 0 OID 24592)
-- Dependencies: 211
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, description, price) FROM stdin;
f5488654-03fd-495c-2d40-02e9f26ec822	otro	prueba de productos	2000
f5488654-03fd-495c-2d40-02e9f26ec262	patatas	prueba de productos	3000
efbff7f6-6374-4c2f-9c96-3611c65068ba	Papas	Libra	1000
3bed5d90-64ed-4bc1-8a3a-a378737ed542	Agua con gas	500 ml	2500
479fba0a-baaf-4b46-95a2-83a663817646	Arroz	Libra	3000
c3f25f98-c5c3-4a00-b550-f716ae36b25f	Docena de huevos	ministro de haciendo aprueba	1800
f7c377cf-0f92-435a-b5e6-2c8cdd9d10c6	Agua sin gas	500 ml	2000
\.


--
-- TOC entry 3325 (class 0 OID 24577)
-- Dependencies: 209
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, name) FROM stdin;
2123860b-2d72-45d0-93e5-fa188ce34fe0	admin
2123860b-2d72-45d0-93e5-fa188ce34fe9	employee
f5488654-03fd-491c-2d40-02e9f26ec435	otro
\.


--
-- TOC entry 3328 (class 0 OID 24597)
-- Dependencies: 212
-- Data for Name: sales; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sales (id, quantity, sale_at, product_id, user_id) FROM stdin;
f5488654-03fd-499c-2d40-02e9f26ec862	1	2022-04-19 00:00:00-05	f5488654-03fd-495c-2d40-02e9f26ec822	f5488654-53fd-491c-8d40-02e9f23ec626
f5488654-03fd-499c-2d40-02e9f26ec352	1	2022-04-19 00:00:00-05	f5488654-03fd-495c-2d40-02e9f26ec822	f5488654-53fd-491c-8d40-02e9f23ec626
f5488654-03fd-199c-2d40-02e9f26ec372	1	2022-04-19 00:00:00-05	f5488654-03fd-495c-2d40-02e9f26ec822	f5488654-53fd-491c-8d40-02e9f23ec626
f5488654-03fd-199c-2d40-02e9f26ec334	1	2022-05-19 00:00:00-05	f5488654-03fd-495c-2d40-02e9f26ec822	f5488654-53fd-491c-8d40-02e9f23ec626
f5488654-03fd-199c-2d40-02e9f26ec359	9	2022-06-19 00:00:00-05	f5488654-03fd-495c-2d40-02e9f26ec822	f5488654-53fd-491c-8d40-02e9f23ec626
\.


--
-- TOC entry 3326 (class 0 OID 24582)
-- Dependencies: 210
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, document, name, last_name, roles_id) FROM stdin;
f5488654-53fd-491c-8d40-02e9f26ec696	3746643	pruebaaa	dnjkdnvjdfn	2123860b-2d72-45d0-93e5-fa188ce34fe0
f5488654-53fd-491c-8d40-02e9f23ec626	3746643	testttt	dnjkdnvjdfn	2123860b-2d72-45d0-93e5-fa188ce34fe0
f5488654-53fd-491c-8d40-02e9f26ec626	3746643	dfge	xnncc	2123860b-2d72-45d0-93e5-fa188ce34fe9
f5488654-53fd-491c-8d40-02e9f23ec696	3746643	diego belisares	xnncc	2123860b-2d72-45d0-93e5-fa188ce34fe9
\.


--
-- TOC entry 3180 (class 2606 OID 24596)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- TOC entry 3176 (class 2606 OID 24581)
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- TOC entry 3182 (class 2606 OID 24601)
-- Name: sales sales_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_pkey PRIMARY KEY (id);


--
-- TOC entry 3178 (class 2606 OID 24586)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3184 (class 2606 OID 24602)
-- Name: sales product_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT product_id FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- TOC entry 3183 (class 2606 OID 24587)
-- Name: users roles_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT roles_id FOREIGN KEY (roles_id) REFERENCES public.roles(id);


--
-- TOC entry 3185 (class 2606 OID 24607)
-- Name: sales user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public.users(id);


-- Completed on 2022-07-07 01:15:18

--
-- PostgreSQL database dump complete
--

