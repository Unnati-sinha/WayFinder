@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.  The ASF licenses this file
@REM to you under the Apache License, Version 2.0 (the
@REM "License"); you may not use this file except in compliance
@REM with the License.  You may obtain a copy of the License at
@REM
@REM    https://www.apache.org/licenses/LICENSE-2.0
@REM
@REM Unless required by applicable law or agreed to in writing,
@REM software distributed under the License is distributed on an
@REM "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
@REM KIND, either express or implied.  See the License for the
@REM specific language governing permissions and limitations
@REM under the License.
@REM ----------------------------------------------------------------------------

@REM ----------------------------------------------------------------------------
@REM Apache Maven Wrapper startup script, version 3.2.0
@REM
@REM Required ENV vars:
@REM ------------------
@REM   JAVA_HOME - location of a JDK home dir
@REM
@REM Optional ENV vars
@REM -----------------
@REM   MAVEN_OPTS - parameters passed to the Java VM when running Maven
@REM     e.g. to debug Maven itself, use
@REM       set MAVEN_OPTS=-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=8000
@REM   MAVEN_SKIP_RC - flag to disable loading of mavenrc files
@REM ----------------------------------------------------------------------------

@REM Begin all REM lines with '@' in case MAVEN_BATCH_ECHO is 'on'
@echo off
@REM set title of command window
title %0
@REM enable echoing by setting MAVEN_BATCH_ECHO to 'on'
@if "%MAVEN_BATCH_ECHO%" == "on"  echo %MAVEN_BATCH_ECHO%
@REM set %HOME% to equivalent of $HOME
if "%HOME%" == "" (set "HOME=%HOMEDRIVE%%HOMEPATH%")

@REM Execute a user defined script before this one
if not "%MAVEN_SKIP_RC%" == "" goto skipRcPre
@REM check for pre script, once with legacy .bat ending and once with .cmd ending
if exist "%HOME%\mavenrc_pre.bat" call "%HOME%\mavenrc_pre.bat" %*
if exist "%HOME%\mavenrc_pre.cmd" call "%HOME%\mavenrc_pre.cmd" %*
:skipRcPre

@REM Check that MAVEN_CMD_LINE_ARGS is set. If not, set it to an empty string.
@if "%MAVEN_CMD_LINE_ARGS%" == "" set "MAVEN_CMD_LINE_ARGS="

@REM Check that MAVEN_CONFIG is set. If not, set it to the default value.
@if "%MAVEN_CONFIG%" == "" set "MAVEN_CONFIG=%USERPROFILE%\.m2"

@REM Check that M2_HOME is set. If not, set it to the default value.
@if "%M2_HOME%" == "" set "M2_HOME=%MAVEN_HOME%"

@REM Check that MAVEN_HOME is set. If not, set it to the default value.
@if "%MAVEN_HOME%" == "" set "MAVEN_HOME=%MVND_HOME%"

@REM Check that MVND_HOME is set. If not, set it to the default value.
@if "%MVND_HOME%" == "" set "MVND_HOME=%M2_HOME%"

@REM Check that MAVEN_HOME is set. If not, set it to the default value.
@if "%MAVEN_HOME%" == "" set "MAVEN_HOME=%M2_HOME%"

@REM Check that MVND_HOME is set. If not, set it to the default value.
@if "%MVND_HOME%" == "" set "MVND_HOME=%MAVEN_HOME%"

@REM Check that JAVA_HOME is set. If not, try to find it.
@if "%JAVA_HOME%" == "" (
  for %%i in (java.exe) do set "JAVACMD=%%~$PATH:i"
  if "%JAVACMD%" == "" (
    echo Warning: JAVA_HOME environment variable is not set.
  )
)

@REM sets MAVEN_PROJECTBASEDIR to the parent directory of the script
@setlocal
set MAVEN_PROJECTBASEDIR=%MAVEN_BASEDIR%
IF NOT "%MAVEN_PROJECTBASEDIR%"=="" goto endDetectBaseDir

set EXEC_DIR=%~dp0
IF EXIST "%EXEC_DIR%\mvnw.cmd" (
  set MAVEN_PROJECTBASEDIR=%EXEC_DIR%
) ELSE (
  set MAVEN_PROJECTBASEDIR=%EXEC_DIR%..
)
:endDetectBaseDir

IF NOT EXIST "%MAVEN_PROJECTBASEDIR%\mvnw.cmd" (
  IF NOT "%MVNW_VERBOSE%" == "true" goto endMavenCommand
  echo "%MAVEN_PROJECTBASEDIR%\mvnw.cmd" does not exist
  goto endMavenCommand
)

@setlocal EnableExtensions EnableDelayedExpansion
set MAVEN_CMD_LINE_ARGS=%MAVEN_CMD_LINE_ARGS% %*

set MAVEN_OPTS=%MAVEN_OPTS% -Dmaven.home="%MVND_HOME%" -Dmaven.repo.local="%MAVEN_CONFIG%" -Dmaven.multiModuleProjectDirectory="%MAVEN_PROJECTBASEDIR%"

set "WRAPPER_JAR=%MAVEN_PROJECTBASEDIR%\mvnw.jar"
set "WRAPPER_LAUNCHER=org.apache.maven.wrapper.MavenWrapperMain"

set CLASSPATH="%WRAPPER_JAR%"

set "EXECUTABLE=%JAVACMD%"
if "%EXECUTABLE%" == "" set "EXECUTABLE=java.exe"

%EXECUTABLE% %MAVEN_OPTS% -classpath %CLASSPATH% %WRAPPER_LAUNCHER% %MAVEN_CMD_LINE_ARGS%

:endMavenCommand
@endlocal & goto :eof
